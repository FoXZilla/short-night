import EventInterface from '@/src/interface/Event';
import Tag from '@/src/module/Tag';
import AxisPoint from '@/src/module/AxisPoint';
import SubAxis from '@/src/module/SubAxis';

export default class Event extends EventInterface{
    constructor(){
        super(...arguments);
        this._subAxis =null;
        this._tag =null;
        this._axisPoint =null;

        this.init();
    };
    init(){
        this._axisPoint =new AxisPoint({
            ctx :this.ctx,
            x :this.targetX,
            y :this.targetY,
            radius :3,
        });
        this._tag =new Tag({
            ctx :this.ctx,
            container :this.container,
            text :this.contentText,
            targetX :this._axisPoint.x,
            targetY :this._axisPoint.y,
        });
        this._subAxis =new SubAxis({
            endText :this.endText,
            x :this._tag.targetX,
            y :this._tag.targetY,
            length :this.length,
            offset :-20,
            ctx :this.ctx,
            container :this.container,
        });
    };
    draw(){
        this._tag.draw();
        this._axisPoint.draw();
        this._subAxis.draw();
    };
};