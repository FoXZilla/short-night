import {ComponentDrawInfo, SN} from "@engine/types";
import {DEBUG} from "@engine/common/config";
import AxisBody from "@engine/axis/body";

const ComponentMap:{[id:string]:Component} = {};

export default abstract class Component{
    abstract name: SN;
    private randomString = Math.random().toString().split('.')[1].slice(0,5);
    id:string = null as any;
    constructor(){
        if(DEBUG){
            ComponentMap[this.randomString] = this;
        }
    };

    abstract drawInfo: ComponentDrawInfo;

    _box:HTMLElement|null = null;
    abstract draw() :any;

    hide(){};
    apply(){
        if(DEBUG){
            this.id = `${this.name}_${this.randomString}`;
            (<any>window).SN_C = ComponentMap;
            (<any>window)[this.id] = this;
            if(!this._box){
                this._box = document.createElement(this.name);
                this._box.id = this.id;
            }
            this._box.dataset.name = this.name;
            const skipKeys = ['tipy','container','canvas'];
            for(let [key,value] of Object.entries(this.drawInfo)){
                if(skipKeys.includes(key)) continue;
                if(typeof value === 'undefined') continue;
                this._box.dataset[key] = JSON.stringify(value);
            }
            Object.assign(this._box.style,{
                position: 'absolute',
                left: this.drawInfo.box.x + 'px',
                top: this.drawInfo.box.y + 'px',
                width: this.drawInfo.box.width + 'px',
                height: this.drawInfo.box.height + 'px',
                zIndex: 9999999 - ~~(this.drawInfo.box.width * this.drawInfo.box.height),
            });
            this.drawInfo.container.appendChild(this._box);
        }
        if(!this.drawInfo.tipy.components[this.name].includes(this)){
            this.drawInfo.tipy.components[this.name].push(this);
        }
    };
    destroyed: boolean = false;
    destroy(){
        if(this._box && this._box.parentNode){
            this._box.parentNode.removeChild(this._box);
        }
        this.drawInfo.tipy.components[this.name].splice(
            this.drawInfo.tipy.components[this.name].indexOf(this),1
        );
        this.destroyed = true;
    };
}
