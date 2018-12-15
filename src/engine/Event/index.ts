import Component from '@engine/common/Component';
import { ComponentDrawInfo } from '@engine/types';
import EventMark from '@engine/Event/EventMark';
import EventBody from '@engine/Event/EventBody';
import EventAxis from '@engine/Event/EventAxis';
import { deepFreeze, mergeBox } from '@engine/common/functions';
import { SN } from '@engine/common/config';
import AxisMilestone from '@engine/Axis/AxisMilestone';
import AxisScale from '@engine/Axis/AxisScale';
import AxisBody from '@engine/Axis/AxisBody';

export interface DrawInfo extends ComponentDrawInfo{
    target: {
        x: number,
        y: number,
    };
    offset: {
        x: number,
        y: number,
    };
    bodyWidth: number;

    date: Date;
    title: string;
    contentText?: string;

    folded: boolean;
    foldedText?: string;

    axisText?: string;
    axisLength?: number;
    axisOffset?: number;
}

export default abstract class Event extends Component{
    name = SN.Event;

    drawInfo:DrawInfo = {
        target: {
            x: 30,
            y: 50,
        },
        offset: this.grid.eventOffset,
        bodyWidth: 300,

        date: null as any,
        title: null as any,

        folded: false,
        foldedText: null as any,

        box: {
            x: 0,
            y: 0,
            width: 500,
            height: 500,
        },
    };

    abstract bodyConstructor :typeof EventBody;
    abstract axisConstructor :typeof EventAxis;
    abstract barkConstructor :typeof EventMark;
    mark:EventMark = null as any;
    body:EventBody = null as any;
    axis:EventAxis|null = null;

    async apply() {
        // @ts-ignore
        if (!this.mark) this.mark = new this.barkConstructor(this);
        this.mark.drawInfo.target = this.drawInfo.target;
        this.mark.drawInfo.width = this.grid.markWidth;
        this.mark.drawInfo.height = this.grid.markHeight;
        await this.mark.apply();

        // @ts-ignore
        if (!this.body) this.body = new this.bodyConstructor(this);
        this.body.drawInfo.markDrawInfo = deepFreeze(this.mark.drawInfo);
        this.body.drawInfo.maxWidth = this.grid.eventWidth;
        this.body.drawInfo.date = this.drawInfo.date;
        this.body.drawInfo.title = this.drawInfo.title;
        this.body.drawInfo.contentText = this.drawInfo.contentText;
        this.body.drawInfo.folded = this.drawInfo.folded;
        this.body.drawInfo.foldedText = this.drawInfo.foldedText;
        this.body.drawInfo.offset =  Object.assign({}, this.drawInfo.offset);
        await this.body.apply();

        if (this.drawInfo.axisLength) {
            // @ts-ignore
            const axis = this.axis || new this.axisConstructor(this);
            axis.drawInfo.axisBodyDrawInfo = deepFreeze(this.ext.components[SN.Axis][0].drawInfo);
            axis.drawInfo.markDrawInfo = deepFreeze(this.mark.drawInfo);
            axis.drawInfo.offsetX = this.grid.minEventAxisOffset;
            axis.drawInfo.length = this.drawInfo.axisLength;
            axis.drawInfo.text = this.drawInfo.axisText;
            await axis.apply();
            this.axis = axis;
        } else if (this.axis) {
            this.axis.destroy();
            this.axis = null;
        }

        this.drawInfo.box = mergeBox(
            this.body.drawInfo.box,
            this.mark.drawInfo.box,
        );
        if (this.axis) {
            this.drawInfo.box = mergeBox(
                this.drawInfo.box,
                this.axis.drawInfo.box,
            );
        }

        return super.apply();
    }

    destroy() {
        this.mark.destroy();
        this.body.destroy();
        this.axis && this.axis.destroy();

        return super.destroy();
    }

    hide() {
        this.mark.hide();
        this.body.hide();
        this.axis && this.axis.hide();

        return super.hide();
    }

    draw() {
        this.body.draw();
        this.axis && this.axis.draw();
        this.mark.draw();

        return super.draw();
    }

    static is(comp:Component) :comp is Event {
        return comp.name === SN.Event;
    }

}
