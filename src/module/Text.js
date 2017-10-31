import TextInterface from '@/src/interface/Text';
import MultiText from '@/src/module/MultiText';
import SingleText from '@/src/module/SingleText';

export default class Text extends TextInterface{
    constructor(){
        super(...arguments);
        this._textComponent =null;

        this.init();
    };
    get width(){
        return parseFloat(getComputedStyle(this._textComponent.elt).width);
    };
    get height(){
        return parseFloat(getComputedStyle(this._textComponent.elt).height);
    };
    init(){
        this._textComponent =new SingleText({
            x:this.x ,y:this.y,
            container :this.container,
            text :this.text,
        });
        if(this._textComponent.width <this.maxWidth)return;

        this._textComponent =new MultiText({
            x:this.x ,y:this.y,
            maxWidth :this.maxWidth,
            container :this.container,
            text :this.text,
        });
    };
    draw(){
        this._textComponent.draw();
    };
};