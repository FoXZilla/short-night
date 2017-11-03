import MilestoneInterface from '@/src/interface/Milestone';
import Text from '@/src/module/Text';
import MilestoneGraph from '@/src/module/MilestoneGraph';


export default class Milestone extends MilestoneInterface{
    constructor(){
        super(...arguments);
        this._text =null;
        this._milestoneGraph =null;

        this.init();
    };
    get width(){
        return this._milestoneGraph.width;
    };
    get height(){
        return this._milestoneGraph.height;
    };
    init(){
        const PaddingUpDown =3;
        const PaddingLeftRight =8;

        this._text =new Text({
            text :this.text,
            container :this.container,
            style :Text.SINGLE_STYLE,
        });
        this._milestoneGraph =new MilestoneGraph({
            ctx :this.ctx,
            axisWidth :this.axisWidth,
            alignX :this.alignX,
            alignY :this.alignY,
            width :this._text.width+PaddingLeftRight*2,
            height:this._text.height+PaddingUpDown*2,
        });
        this._text.x =this._milestoneGraph.alignX-this._text.width/2;
        this._text.y =this._milestoneGraph.alignY-this._text.height/2;
        this._text.init();
    };
    draw(){
        this._text.draw();
        this._milestoneGraph.draw();
    };
};