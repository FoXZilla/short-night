import * as Engine from '@engine';
import AxisBody from './AxisBody';
import AxisMilestone from './AxisMilestone';
import AxisScale from './AxisScale';

export default class Axis extends Engine.Axis {
    theme = 'rules';

    milestones :AxisMilestone[] = [];

    bodyConstructor = AxisBody;
    milestoneConstructor = AxisMilestone;
    scaleConstructor = AxisScale;

    initMilestones() {
        super.initMilestones();

        this.milestones.forEach((milestone :AxisMilestone) => {
            milestone.drawInfo.lineWidth = this.grid.milestoneLineWidth;
        });
    }

}
