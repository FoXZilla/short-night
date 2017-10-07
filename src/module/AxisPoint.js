import AxisPointInterface from '@/src/interface/AxisPoint';

export default class AxisPoint extends AxisPointInterface{
    constructor(pointOptions){
        super(...arguments);

        this.borderWidth =pointOptions.radius/15+1;
        this.innerRadius =pointOptions.radius;
        this.outerRadius =pointOptions.radius*2+2;
        Object.defineProperty(this,'radius',{
            getter :()=>{
                return this.outerRadius+this.borderWidth;
            },
            setter(){
                // todo: dynamic compute
                throw new Error('"radius" is read-only');
            },
        });
    };
    draw(){
        // draw options
        // todo: be optional
        var coreColor   ='#00b6f7';
        var bgColor     ='rgba(36,36,36,0.4)';
        var borderColor =coreColor;
        var shadowColor =bgColor;
        var shadowBlur  =3;
        // draw
        this.ctx.beginPath();//draw bg
        this.ctx.fillStyle=bgColor;
        this.ctx.arc(this.x,this.y,this.outerRadius,0,7);
        this.ctx.fill();
        this.ctx.shadowBlur =shadowBlur;//shadow
        this.ctx.shadowColor =shadowColor;
        this.ctx.beginPath();//draw border
        this.ctx.lineWidth =this.borderWidth;
        this.ctx.strokeStyle=borderColor;
        this.ctx.arc(this.x,this.y,this.outerRadius,0,7);
        this.ctx.stroke();
        this.ctx.beginPath();//draw middle point
        this.ctx.fillStyle=coreColor;
        this.ctx.arc(this.x,this.y,this.innerRadius,0,7);
        this.ctx.fill();
    };
}