import { Extension, ExtensionManager } from '@/extensions/index';
import Timeline from '../Timeline';

export default class ColorPicker implements Partial<Extension> {
    colors = ['rgb(213, 57, 38)', 'rgb(252, 200, 29)', 'rgb(0, 163, 201)'];
    startIndex = Math.floor(Math.random() * 3);
    constructor(public etx:ExtensionManager) {}
    async onApply(timeline:Timeline) {
        if (!Timeline.is(timeline)) return;

        for (let i = 0; i < timeline.events.length; i++) {
            const colorIndex = (i + this.startIndex) % this.colors.length;
            timeline.events[i].extraData.mainColor = this.colors[colorIndex];
        }
    }
}
