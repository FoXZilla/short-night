import { Extension, ExtensionManager } from '@/extensions/index';
import Timeline from '@engine/Timeline';
import EventBody from '@engine/Event/EventBody';
import EventMark from '@engine/Event/EventMark';
import EventAxis from '@engine/Event/EventAxis';
import Component from '@engine/common/Component';

export default class ColorPicker implements Partial<Extension> {
    colors = ['rgb(213, 57, 38)', 'rgb(252, 200, 29)', 'rgb(0, 163, 201)'];
    startIndex = Math.floor(Math.random() * 3);
    constructor(public etx:ExtensionManager) {}
    async onApply(comp:Component) {
        if (Timeline.is(comp)) this.createColor(comp);
        if (
            EventBody.is(comp)
            || EventMark.is(comp)
            || EventAxis.is(comp)
        ) this.setColorIntoDrawInfo(comp);
    }

    setColorIntoDrawInfo(comp:EventBody|EventMark|EventAxis) {
        const etx = this.etx;

        Object.defineProperty(comp.drawInfo, 'mainColor', {
            get() {
                return etx.getParent(comp).extraData.mainColor;
            },
        });
    }

    createColor(timeline:Timeline) {
        for (let i = 0; i < timeline.events.length; i++) {
            const colorIndex = (i + this.startIndex) % this.colors.length;
            timeline.events[i].extraData.mainColor = this.colors[colorIndex];
        }
    }
}
