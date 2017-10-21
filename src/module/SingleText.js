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
        this.elt.textContent =this.text;
        this.elt.style =`
            position :absolute;
            visibility :hidden;/*magic*/
            overflow :hidden;
            white-space :nowrap;
            text-overflow :ellipsis;
            left :${this.x}px;
            top  :${this.y}px;
        `;
        this.container.appendChild(this.elt);
    };
    draw(){
        this.elt.style.visibility =null;
    };
};