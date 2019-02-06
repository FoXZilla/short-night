import { Extension, ExtensionManager } from '@/engine/extensions';
import { AxisMilestone, Component } from '@engine';
import { SN } from '@engine/common/definitions';

export default class AvoidMilestion implements Partial<Extension> {
    constructor(public etx:ExtensionManager) {}

    async onApply(comp:Component) {
        if (!AxisMilestone.is(comp)) return;

        const grid = this.etx.components[SN.Timeline][0].grid;

        grid.eventOffset.x = Math.max(
            grid.eventOffset.x,
            comp.drawInfo.bodyDrawInfo.start.x - comp.drawInfo.box.x + 12.5,
        );
    }
}
