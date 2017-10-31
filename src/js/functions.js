/**
 * @param {Line} line1
 * @param {Line} line2
 * @property {Number} Line.startX
 * @property {Number} Line.startY
 * @property {Number} Line.endX
 * @property {Number} Line.endY
 * */
export function isIntersect(line1, line2) {
    var {startX :x1,startY:y1,endX:x2,endY:y2} =line1;
    var {startX :x3,startY:y3,endX:x4,endY:y4} =line2;

    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return false;}
        } else {
            if (!(x1<=x&&x<=x2)) {return false;}
        }
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return false;}
        } else {
            if (!(y1<=y&&y<=y2)) {return false;}
        }
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return false;}
        } else {
            if (!(x3<=x&&x<=x4)) {return false;}
        }
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return false;}
        } else {
            if (!(y3<=y&&y<=y4)) {return false;}
        }
    }
    return true;
}

/**
 * @param {Line} line
 * @param {Rect} rect
 * @property {Number} Rect.width
 * @property {Number} Rect.height
 * @property {Number} Rect.y
 * @property {Number} Rect.x
 * */
export function isIntersectWithRect(line ,rect){
    return (
        isIntersect(line ,{
            startX :rect.x,
            startY :rect.y,
            endX   :rect.x+rect.width,
            endY   :rect.y,
        })
        || isIntersect(line ,{
            startX :rect.x+rect.width,
            startY :rect.y,
            endX   :rect.x+rect.width,
            endY   :rect.y+rect.height,
        })
        || isIntersect(line ,{
            startX :rect.x+rect.width,
            startY :rect.y+rect.height,
            endX   :rect.x,
            endY   :rect.y+rect.height,
        })
        || isIntersect(line ,{
            startX :rect.x,
            startY :rect.y+rect.height,
            endX   :rect.x,
            endY   :rect.y
        })
    );
}

export function getShorterLine(line){
    var newLine =Object.create(line);
    if(newLine.startX>newLine.endX){
        newLine.startX--;
        newLine.endX++;
    }else{
        newLine.startX++;
        newLine.endX--;
    }
    if(newLine.startY>newLine.endY){
        newLine.startY--;
        newLine.endY++;
    }else{
        newLine.startY++;
        newLine.endY--;
    }
    return newLine;
}

export function getLineLength(line){
    var result =Math.sqrt(
        Math.pow(line.startX-line.endX ,2)
        +
        Math.pow(line.startY-line.endY ,2)
    );
    if(Number.isNaN(result)){
        throw new RangeError('Result is NaN.'+JSON.stringify(line));
    }
    return ~~result;
}

export function mount(el ,app){
    el =el instanceof Element ?el :document.querySelector(el);
    for(let {name,value} of el.attributes){
        app.setAttribute(name ,value);
    };
    el.parentNode.replaceChild(app,el);
    return app;
};
