import SingleTextInterface from '@/src/interface/SingleText';

export default class SingleText extends SingleTextInterface{
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
        this.elt.style.position ='absolute';
        this.elt.style.visibility ='hidden';//magic
        this.elt.style.overflow ='hidden';
        this.elt.style.whiteSpace ='nowrap';
        this.elt.style.textOverflow ='ellipsis';
        this.elt.textContent =this.text;
        this.container.appendChild(this.elt);
    };
    draw(){
        this.elt.style.left =`${this.x}px`;
        this.elt.style.top  =`${this.y}px`;
        this.elt.style.visibility =null;
    };
};