import TextInterface from '@/src/interface/Text';
import {object2style} from '@/src/js/functions';
import {parseHTML} from 'pea-scripts/dist/function.browser';

export default class Text extends TextInterface{
    constructor({style=Text.MULTI_STYLE}){
        super(...arguments);
        this.elt =null;
        this.style =style;

        this.init();
    };
    get width(){
        return parseFloat(getComputedStyle(this.elt).width);
    };
    get height(){
        return parseFloat(getComputedStyle(this.elt).height);
    };
    init(){
        if(this.style.nowrap &&this.style.aspectRatio){
            throw new TypeError('Text cannot adapt aspect ratio when nowrap.');
        };
        this.elt =this.createElement();
        this.container.appendChild(this.elt);
        if(this.style.aspectRatio){
            this.adaptAspect();
        };
    };
    draw(){
        this.elt.style.visibility =null;
    };
    //@private
    adaptAspect(){
        var step =5;
        while(this.width/this.height>this.style.aspectRatio){
            this.elt.style.width =this.width-step+'px';
        };
        this.elt.style.width =this.width+step+'px';
    };
    createElement(){
        var style ={
            position :'absolute',
            visibility :'hidden',//magic
            overflow :'hidden',
            left :`${this.x}px`,
            top  :`${this.y}px`,
        };
        if(this.style.nowrap){
            Object.assign(style ,{
                whiteSpace :'nowrap',
                textOverflow :'ellipsis',
            });
        }else{
            Object.assign(style ,{
                wordWrap :'break-word',
            });
        };
        if(this.style.maxWidth){
            Object.assign(style ,{
                maxWidth :this.style.maxWidth+'px',
            });
        };
        return parseHTML(`
            <div style="${object2style(style)}">
                ${this.text}            
            </div>
        `).firstChild;
    };
};

Text.MULTI_STYLE ={
    maxWidth :0,
    aspectRatio :2.62,
    nowrap :false,
};
Text.SINGLE_STYLE ={
    maxWidth :300,
    aspectRatio :0,
    nowrap :true,
};