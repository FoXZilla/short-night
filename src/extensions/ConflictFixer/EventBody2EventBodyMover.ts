import EventBody from '../../Event/EventBody';
import { isOverlap, walkLoop } from '../../common/functions';
import { SN } from '../../common/definitions';
import { ExtensionManager } from '..';
import { Conflict as ComponentConflict } from '.';
import { Breakpoint } from '../BreakpointAnimation';
import { ConflictFixResult } from '../../types';

type Conflict = ComponentConflict<EventBody>;

export default class EventBody2EventBodyMover {
    constructor(public ext :ExtensionManager) {}

    conflicts :Conflict[] = [];
    /**
     * above EventBody is above, below EventBody is below
     * */
    eventBodyList :EventBody[] = [];
    spaceMap = new Map() as Map<EventBody, { top :number, bottom :number }>;

    static async avoid(
        { mover, fixed, direction }
        :{ mover :EventBody, fixed :EventBody, direction :1 | -1 },
    ) {
        if (direction > 0) {
            mover.drawInfo.offset.y += (fixed.drawInfo.box.y + fixed.drawInfo.box.height)
                - mover.drawInfo.box.y
                + 1;
        } else {
            mover.drawInfo.offset.y -= (mover.drawInfo.box.y + mover.drawInfo.box.height)
                - fixed.drawInfo.box.y
                + 1;
        }
        await mover.apply();
    }
    static isConflict(eb1 :EventBody, eb2 :EventBody) {
        if (eb1 === eb2) return false;

        if (eb1.drawInfo.floated !== eb2.drawInfo.floated) {
            const floated = (eb1.drawInfo.floated ? eb1 : eb2) as EventBody;
            const another = (eb1 === floated ? eb2 : eb1) as EventBody;

            if ( // floated's line overlapped with another's body
                (floated.drawInfo.markDrawInfo.target.y > another.drawInfo.box.y)
                && (
                    floated.drawInfo.markDrawInfo.target.y
                    < (another.drawInfo.box.y + another.drawInfo.box.height)
                )
            ) return true;
        }

        return isOverlap(eb1.drawInfo.box, eb2.drawInfo.box);
    }

    public async fix() :Promise<ConflictFixResult> {
        this.eventBodyList = Array.from(this.ext.components[SN.EventBody])
            .sort((eb1, eb2) => (
                eb1.drawInfo.markDrawInfo.target.y
                - eb2.drawInfo.markDrawInfo.target.y
            ));

        return await walkLoop(async () => [
            await this.tryFixOne(),
        ]).catch(() => ConflictFixResult.Failed);
    }

    /**
     * @return {boolean} have fixed one of conflicts?
     * */
    protected async tryFixOne() :Promise<ConflictFixResult> {
        await this.countConflict();
        this.countSpace();

        if (this.conflicts.length === 0) return ConflictFixResult.NoConflict;
        this.conflicts = this.conflicts.filter(
            conflict => this.isPossible(conflict),
        );
        if (this.conflicts.length === 0) return ConflictFixResult.Failed;

        const conflict = this.conflicts.find(
            conflict1 => this.conflicts.every(
                conflict2 => this.countCast(conflict1) <= this.countCast(conflict2),
            ),
        )!;

        const eventBodies = [
            conflict.self,
            ...conflict.with,
        ].sort(
            (eb1, eb2) => eb2.drawInfo.markDrawInfo.target.y - eb1.drawInfo.markDrawInfo.target.y,
        );
        const options = {
            components: [
                ...this.ext.components[SN.AxisBody],
                ...eventBodies.filter(eb => !eb.drawInfo.floated),
                ...eventBodies.filter(eb => eb.drawInfo.floated),
            ],
            protagonist: conflict.self,
        };

        await this.ext.breakpoint.block(Breakpoint.FixEventBody2EventBodyMover, options);
        await this.fixConflict(conflict);
        await this.ext.breakpoint.block(
            Breakpoint.FixEventBody2EventBodyMover,
            {
                ...options,
                forward: true,
            },
        );

        return ConflictFixResult.Alleviated;
    }

    protected isPossible(conflict :Conflict) {
        if (
            conflict.self.drawInfo.floated
            && conflict.with.some(eb => !eb.drawInfo.floated)
        ) return false;

        const needed = this.countNeeded(conflict);
        const space = this.spaceMap.get(conflict.self)!;

        return (needed.bottom === 0 || needed.top === 0)
            && (space.bottom >= needed.bottom && space.top >= needed.top);
    }
    protected async fixConflict(conflict :Conflict) {
        const needed = this.countNeeded(conflict);
        const moveDistance = needed.top ? needed.top : -needed.bottom;
        const direction = moveDistance / Math.abs(moveDistance) as (1 | -1);

        // fix conflict
        conflict.self.drawInfo.offset.y += moveDistance;
        await conflict.self.apply();

        // and fix side-effect
        const effectable = this.eventBodyList.filter(
            eb => eb.drawInfo.floated === conflict.self.drawInfo.floated,
        );
        for (
            let i = effectable.indexOf(conflict.self) + direction;
            i >= 0 && i < effectable.length;
            i += direction
        ) {
            const last = effectable[i - direction];
            const now = effectable[i];
            if (EventBody2EventBodyMover.isConflict(last, now)) {
                await EventBody2EventBodyMover.avoid({
                    direction,
                    mover: now,
                    fixed: last,
                });
            } else break;
        }
    }

    protected async countConflict() {
        this.conflicts.length = 0;

        await Promise.all(this.eventBodyList.map(eb => eb.apply()));

        for (const eb of this.eventBodyList) {
            const conflict = {
                self: eb,
                with: this.eventBodyList.filter(
                    target => EventBody2EventBodyMover.isConflict(eb, <EventBody>target),
                ) as EventBody[],
            };
            if (conflict.with.length) this.conflicts.push(conflict);
        }
    }
    protected countCast(conflict :Conflict) {
        const needed = this.countNeeded(conflict);
        return needed.bottom + needed.top;
    }
    /**
     * Count the number how many space needed for fix the conflict by verticalMove
     * */
    protected countNeeded(conflict :Conflict) :{ top :number, bottom :number } {
        const origin = conflict.self;
        const result = {
            top: 0,
            bottom: 0,
        };
        const above :EventBody[] = conflict.with.filter(
            cb => cb.drawInfo.markDrawInfo.target.y < origin.drawInfo.markDrawInfo.target.y,
        );
        const below :EventBody[] = conflict.with.filter(
            cb => cb.drawInfo.markDrawInfo.target.y > origin.drawInfo.markDrawInfo.target.y,
        );

        if (above.length) {
            result.top = Math.max(
                ...above.map((upper) => {
                    if (upper.drawInfo.floated === origin.drawInfo.floated) {
                        return (
                            upper.drawInfo.box.y
                            + upper.drawInfo.box.height
                            - origin.drawInfo.box.y
                        );
                    } else if (origin.drawInfo.floated) {
                        return ((
                            upper.drawInfo.box.y + upper.drawInfo.box.height)
                            - origin.drawInfo.markDrawInfo.target.y
                        );
                    } else if (upper.drawInfo.floated) {
                        return upper.drawInfo.markDrawInfo.target.y - origin.drawInfo.box.y;
                    }
                    throw SyntaxError('floated is not a boolean');
                }),
            );
        }
        if (below.length) {
            result.bottom = Math.max(
                ...below.map((lower) => {
                    const avoidBox = (
                        origin.drawInfo.box.y
                        + origin.drawInfo.box.height
                        - lower.drawInfo.box.y
                    );

                    if (lower.drawInfo.floated === origin.drawInfo.floated) {
                        return avoidBox;
                    } else if (origin.drawInfo.floated) {
                        const avoidFloatLine = origin.drawInfo.markDrawInfo.target.y
                            - lower.drawInfo.box.y;

                        return Math.max(
                            avoidBox,
                            avoidFloatLine,
                        );
                    } else if (lower.drawInfo.floated) {
                        const avoidFloatLine = (origin.drawInfo.box.y + origin.drawInfo.box.height)
                            - lower.drawInfo.markDrawInfo.target.y;

                        return Math.max(
                            avoidBox,
                            avoidFloatLine,
                        );
                    }
                    throw SyntaxError('floated is not a boolean');
                }),
            );
        }

        // margin 1 to target of conflict
        if (result.top) result.top++;
        if (result.bottom) result.bottom++;

        origin.extraData.needed = result;

        return result;
    }
    /**
     * Count the number how many space the component can move
     * */
    protected countSpace() {
        const spacePadding = 4; // FIXME: remove supported

        // Itself's can move space
        this.eventBodyList.forEach(
            eb => this.spaceMap.set(eb, {
                top: eb.drawInfo.markDrawInfo.target.y - eb.drawInfo.box.y - spacePadding,
                bottom: eb.drawInfo.box.y
                    + eb.drawInfo.box.height
                    - eb.drawInfo.markDrawInfo.target.y
                    - spacePadding
                ,
            }),
        );

        const applyLimiting = (allEventBody :EventBody[]) => {
            if (allEventBody.length === 0) return;

            // An item is limited from

            // it's first that prevent out of canvas
            const first = allEventBody[0];
            this.spaceMap.get(first)!.bottom = Math.min(
                this.spaceMap.get(first)!.bottom,
                first.drawInfo.box.y,
            );
            // it's last that prevent out of canvas
            const last = allEventBody[allEventBody.length - 1];
            this.spaceMap.get(last)!.top = Math.min(
                this.spaceMap.get(last)!.top,
                last.canvas.height - (last.drawInfo.box.y + last.drawInfo.box.height),
            );
            // clamp by neighbor
            for (let i = 1; i < allEventBody.length; i++) {
                const previous = allEventBody[i - 1];
                const now = allEventBody[i];
                const nowData = this.spaceMap.get(now)!;
                const previousData = this.spaceMap.get(previous)!;

                const distance = now.drawInfo.box.y
                    - (previous.drawInfo.box.y + previous.drawInfo.box.height);

                nowData.bottom = Math.min(
                    nowData.bottom,
                    distance + previousData.bottom,
                );
            }
            for (let i = allEventBody.length - 2; i >= 0; i--) {
                const next = allEventBody[i + 1];
                const now = allEventBody[i];
                const nowData = this.spaceMap.get(now)!;
                const nextData = this.spaceMap.get(next)!;

                const distance = next.drawInfo.box.y
                    - (now.drawInfo.box.y + now.drawInfo.box.height);

                nowData.top = Math.min(
                    nowData.top,
                    distance + nextData.top,
                );
            }

            // Set number which < 0 as 0
            Array.from(this.spaceMap.values()).forEach((value) => {
                value.top = Math.max(0, value.top);
                value.bottom = Math.max(0, value.bottom);
            });
        };

        applyLimiting(this.eventBodyList.filter(eb => eb.drawInfo.floated));
        applyLimiting(this.eventBodyList.filter(eb => !eb.drawInfo.floated));

        this.eventBodyList.forEach(eb => {
            eb.extraData.space = this.spaceMap.get(eb);
        });
    }
}
