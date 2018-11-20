import Component from "@engine/common/component";
import {ComponentDrawInfo} from "@engine/types";
import EventMark from "@engine/event/mark";
import EventBody from "@engine/event/body";
import EventAxis from "@engine/event/axis";
import {mergeBox} from "@engine/common/functions";
import {SN} from "@engine/common/config";

export interface DrawInfo extends ComponentDrawInfo{
    target: {
        x: number,
        y: number,
    };
    offset: {
        x: number,
        y: number,
    };
    bodyWidth: number,

    date: Date,
    title: string;
    contentText?: string;

    folded: boolean;
    foldedText?: string;

    axisText?: string;
    axisLength?: number;
    axisOffset?: number;
}

export default class Event extends Component{
    name = SN.Event;

    drawInfo:DrawInfo = {
        target: {
            x: 30,
            y: 50,
        },
        offset: {
            x: -20,
            y: -30,
        },
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

    mark = new EventMark(this);
    body = new EventBody(this);
    axis:EventAxis|null = null;

    async apply(){

        this.mark.drawInfo.box.x = this.drawInfo.target.x - this.mark.drawInfo.box.width/2;
        this.mark.drawInfo.box.y = this.drawInfo.target.y - this.mark.drawInfo.box.height/2;
        await this.mark.apply();

        this.body.drawInfo.target.x = this.drawInfo.target.x;
        this.body.drawInfo.target.y = this.drawInfo.target.y;
        this.body.drawInfo.box.x = this.drawInfo.target.x + this.drawInfo.offset.x;
        this.body.drawInfo.box.y = this.drawInfo.target.y + this.drawInfo.offset.y;
        this.body.drawInfo.maxWidth = this.drawInfo.bodyWidth;
        this.body.drawInfo.date = this.drawInfo.date;
        this.body.drawInfo.title = this.drawInfo.title;
        this.body.drawInfo.contentText = this.drawInfo.contentText;
        this.body.drawInfo.folded = this.drawInfo.folded;
        this.body.drawInfo.foldedText = this.drawInfo.foldedText;
        await this.body.apply();

        if(this.drawInfo.axisLength){
            if(!this.axis) this.axis = new EventAxis(this);
            this.axis.drawInfo.start = this.drawInfo.target;
            this.axis.drawInfo.length = this.drawInfo.axisLength;
            this.axis.drawInfo.text = this.drawInfo.axisText;
            if(typeof this.drawInfo.axisOffset !== 'undefined'){
                this.axis.drawInfo.offset = this.drawInfo.axisOffset;
            }
            await this.axis.apply();
        }else if(this.axis){
            this.axis.destroy();
            this.axis = null;
        }

        this.drawInfo.box = mergeBox(
            this.body.drawInfo.box,
            this.mark.drawInfo.box,
        );
        if(this.axis){
            this.drawInfo.box = mergeBox(
                this.drawInfo.box,
                this.axis.drawInfo.box,
            );
        }

        return super.apply();
    };

    destroy(){
        this.mark.destroy();
        this.body.destroy();
        this.axis && this.axis.destroy();

        return super.destroy();
    };

    hide(){
        this.mark.hide();
        this.body.hide();
        this.axis && this.axis.hide();

        return super.hide();
    };

    draw(){
        this.body.draw();
        this.axis && this.axis.draw();
        this.mark.draw();

        return super.draw();
    };

    static is(comp:Component) :comp is Event{
        return comp.name === SN.Event;
    }

};
