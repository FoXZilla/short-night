import MultiTextInterface from '@/src/interface/MultiText';

export default class MultiText extends MultiTextInterface{
    constructor(){
        super(...arguments);
        this.elt =null;

        this.init();
    };
    get width(){
        return parseFloat(getComputedStyle(this.elt).width);
    };
    get height(){
        return parseFloat(getComputedStyle(this.elt).height);
    };
    init(){
        this.elt =document.createElement('div');
        this.elt.className ='pea--multi-text';//todo:
        this.elt.innerHTML =this.text;
        this.elt.style =`
            position :absolute;
            visibility :hidden;/*magic*/
            overflow :hidden;
            max-width :${this.maxWidth}px;
            left :${this.x}px;
            top  :${this.y}px;
        `;
        this.container.appendChild(this.elt);
    };
    draw(){
        this.elt.style.visibility =null;
    };
};