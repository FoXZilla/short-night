import SubAxisInterface from '@/src/interface/SubAxis';
import AxisSubline from '@/src/module/AxisSubline';
import Note from '@/src/module/Note';

export default class SubAxis extends SubAxisInterface{
    constructor(meta){
        super(...arguments);
        this.axisSubline =null;
        this._notes =null;

        this.init();
    };
    init(){
        this.axisSubline =new AxisSubline({
            x :this.x ,y:this.y,
            length :this.length,
            offset :50,//todo: apply an area from automatic-collision-avoidance-system
            ctx    :this.ctx,
        });

        this._notes =this.notes.map(({text,position})=>new Note({
            ctx :this.ctx,
            container :this.container,
            text :text,
            targetX:this.x+this.axisSubline.offset,
            targetY:this.y-this.axisSubline.length*position,
        }));

    };
    draw(){
        this.axisSubline.draw();
        this._notes.forEach(n=>n.draw());
    };
};