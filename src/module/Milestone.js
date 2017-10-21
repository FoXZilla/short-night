import MilestoneInterface from '@/src/interface/Milestone';
import SingleText from '@/src/module/SingleText';
import MilestoneGraph from '@/src/module/MilestoneGraph';


export default class Milestone extends MilestoneInterface{
    constructor(){
        super(...arguments);
        this._singleText =null;
        this._milestoneGraph =null;

        Object.defineProperty(this ,'width' ,{get:()=>this._milestoneGraph.width});
        Object.defineProperty(this ,'height',{get:()=>this._milestoneGraph.height});

        this.init();
    };
    init(){
        const PaddingUpDown =3;
        const PaddingLeftRight =8;

        this._singleText =new SingleText({
            text :this.text,
            container :this.container,
        });
        this._milestoneGraph =new MilestoneGraph({
            ctx :this.ctx,
            axisWidth :this.axisWidth,
            alignX :this.alignX,
            alignY :this.alignY,
            width :this._singleText.width+PaddingLeftRight*2,
            height:this._singleText.height+PaddingUpDown*2,
        });
        this._singleText.x =this._milestoneGraph.alignX-this._singleText.width/2;
        this._singleText.y =this._milestoneGraph.alignY-this._singleText.height/2;
        this._singleText.init();
    };
    draw(){
        this._singleText.draw();
        this._milestoneGraph.draw();
    };
};