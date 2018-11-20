import {Box ,DateBy ,Line} from "@engine/types";
import {DEBUG} from "@engine/common/config";
import {FixResult} from "@/extensions/conflict-fixer";

export function isBox(obj:any): obj is Box{
    return typeof obj === 'object'
        && typeof obj.x === 'number'
        && typeof obj.y === 'number'
        && typeof obj.width === 'number'
        && typeof obj.height === 'number'
    ;
}
export function isLine(obj:any): obj is Box{
    return typeof obj === 'object'
        && typeof obj.startX === 'number'
        && typeof obj.startY === 'number'
        && typeof obj.endX === 'number'
        && typeof obj.endY === 'number'
    ;
}
export function box2Lines(box:Box):Line[]{
    return [
        {
            startX: box.x,
            startY: box.y,
            endX: box.x + box.width,
            endY: box.y,
        },{
            startX: box.x + box.width,
            startY: box.y,
            endX: box.x + box.width,
            endY: box.y + box.height,
        },{
            startX: box.x + box.width,
            startY: box.y + box.height,
            endX: box.x,
            endY: box.y + box.height,
        },{
            startX: box.x,
            startY: box.y + box.height,
            endX: box.x,
            endY: box.y
        }
    ];
};

export function countBox(elt:HTMLElement):Box{
    const styles = getComputedStyle(elt);
    return {
        x: parseFloat(styles.left!),
        y: parseFloat(styles.top!),
        width: parseFloat(styles.width!),
        height: parseFloat(styles.height!),
    }
};

export function deepAssign(...args:any[]){
    const result:any = args.shift();
    for(let obj of args){
        for(let [key,value] of Object.entries(obj)){
            if(key in result){
                if(Array.isArray(value) && Array.isArray(result[key])){
                    result[key].push(...value);
                }else if(typeof value === 'object' && typeof result[key] === 'object'){
                    deepAssign(result[key], value);
                }else{
                    result[key] = value;
                }
            }else{
                result[key] = value;
            }
        }
    }
    return result;
}

export const TimeNodeGetter: {
    [key in DateBy]: (start: Date ,end: Date) => Date[]
} = function(){
    const getNodes = function(start: Date ,end: Date ,step: (date: Date) => void): Date[]{
        const startNode: Date = function(template){
            var node = new Date(template);
            node.setFullYear(template.getFullYear() - 1 ,0 ,1);
            node.setHours(0 ,0 ,0 ,0);
            return node;
        }(start);
        const endNode: Date = function(template){
            var node = new Date(template);
            node.setFullYear(template.getFullYear() + 1 ,0 ,1);
            node.setHours(0 ,0 ,0 ,0);
            return node;
        }(end);
        const nodes: Date[] = [];
        {
            let tempNode = new Date(startNode);
            while(tempNode.getFullYear() <= endNode.getFullYear()){
                nodes.push(new Date(tempNode));
                step(tempNode);
            }
            ;
        }
        ;
        return nodes.filter(date => date.getTime() < end.getTime() && date.getTime() > start.getTime());
    };
    return {
        year(start: Date ,end: Date): Date[]{
            return getNodes(
                start ,end ,
                date => date.setFullYear(date.getFullYear() + 1)
            );
        } ,
        quarter(start: Date ,end: Date): Date[]{
            return getNodes(
                start ,end ,
                date =>{
                    if(date.getMonth() + 3 >= 12){
                        date.setFullYear(date.getFullYear() + 1);
                        date.setMonth(0 ,1);
                    }else{
                        date.setMonth(date.getMonth() + 3 ,1);
                    }
                }
            );
        } ,
        month(start: Date ,end: Date): Date[]{
            return getNodes(
                start ,end ,
                date =>{
                    if(date.getMonth() === 11){
                        date.setFullYear(date.getFullYear() + 1);
                        date.setMonth(0 ,1);
                    }else{
                        date.setMonth(date.getMonth() + 1 ,1);
                    }
                }
            );
        } ,
        week(start: Date ,end: Date): Date[]{
            return getNodes(
                start ,end ,
                date =>{
                    do{
                        date.setTime(date.getTime() + 1000*60*60*24);
                    }while(date.getDay() !== 1);
                }
            );
        } ,
        day(start: Date ,end: Date): Date[]{
            return getNodes(
                start ,end ,
                date => date.setTime(date.getTime() + 1000*60*60*24) ,
            );
        } ,
    };
}();

export function mergeBox(...args:Box[]):Box{
    let leftTop = {
        x: Infinity,
        y: Infinity,
    };
    let rightBottom = {
        x: -Infinity,
        y: -Infinity,
    };
    for(let box of args){
        if(box.x < leftTop.x) leftTop.x = box.x;
        if(box.y < leftTop.y) leftTop.y = box.y;
        if(box.x+box.width > rightBottom.x) rightBottom.x = box.x+box.width;
        if(box.y+box.height > rightBottom.y) rightBottom.y = box.y+box.height;
    };
    return {
        x: leftTop.x,
        y: leftTop.y,
        width: rightBottom.x - leftTop.x,
        height: rightBottom.y - leftTop.y,
    };
};

export function isIntersecting(line1: Line, line2: Line): boolean{
    let {startX: x1, startY: y1, endX: x2, endY: y2} = line1;
    let {startX: x3, startY: y3, endX: x4, endY: y4} = line2;

    if([x1, x2, x3, x4, y1, y2, y3, y4].some(isNaN)){
        throw TypeError('Unexpected NaN');
    }
    [x1, x2, x3, x4, y1, y2, y3, y4] = [x1, x2, x3, x4, y1, y2, y3, y4].map(Math.round);

    // Same slope
    const [slope1,slope2] = [Math.abs(x1-x2)/Math.abs(y1-y2), Math.abs(x3-x4)/Math.abs(y3-y4)];
    if(slope1 === slope2){
        const [bixX,smallX] = [x1,x2].sort((n1,n2)=>n2-n1);
        const [bixY,smallY] = [y1,y2].sort((n1,n2)=>n2-n1);
        if(slope1 === 0){
            return ((y3<=bixY && y3>=smallY) || (y4<=bixY && y4>=smallY))
                && x1 === x3
                ;
        }
        if(slope1 === Infinity){
            return ((x3<=bixX && x3>=smallX) || (x4<=bixX && x4>=smallX))
                && y1 === y3
                ;
        }
        return ((x3<=bixX && x3>=smallX) && (y3<=bixY && y3>=smallY))
            || ((x4<=bixX && x4>=smallX) || (y4<=bixY && y4>=smallY))
        ;
    }
    if(slope1 === Infinity) y1 += 0.0001;
    if(slope2 === Infinity) y3 += 0.0001;
    if(slope1 === 0) x1 += 0.0001;
    if(slope2 === 0) x3 += 0.0001;

    const x = ((x1*y2 - y1*x2)*(x3 - x4) - (x1 - x2)*(x3*y4 - y3*x4))/((x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4));
    const y = ((x1*y2 - y1*x2)*(y3 - y4) - (y1 - y2)*(x3*y4 - y3*x4))/((x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4));
    if(isNaN(x) || isNaN(y)){
        return false;
    }else{
        if(x1 >= x2){
            if(!(x2 <= x && x <= x1)){
                return false;
            }
        }else{
            if(!(x1 <= x && x <= x2)){
                return false;
            }
        }
        if(y1 >= y2){
            if(!(y2 <= y && y <= y1)){
                return false;
            }
        }else{
            if(!(y1 <= y && y <= y2)){
                return false;
            }
        }
        if(x3 >= x4){
            if(!(x4 <= x && x <= x3)){
                return false;
            }
        }else{
            if(!(x3 <= x && x <= x4)){
                return false;
            }
        }
        if(y3 >= y4){
            if(!(y4 <= y && y <= y3)){
                return false;
            }
        }else{
            if(!(y3 <= y && y <= y4)){
                return false;
            }
        }
    }
    return true;
}
export function isOverlap(item1:Box|Line, item2:Box|Line) :boolean{
    const lines1 = isBox(item1) ?box2Lines(item1) :[item1];
    const lines2 = isBox(item2) ?box2Lines(item2) :[item2];
    return lines1.some(line1=>lines2.some(line2=>isIntersecting(line1,line2)));
}

export function drawLine(ctx:CanvasRenderingContext2D, line:Line): void{
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#f00';
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.stroke();
}

export async function walkLoop(
    fn: ()=>Promise<FixResult[]>,
    max = 100,
) :Promise<FixResult>{
    let alleviated = false;

    for(let i=0 ;i<max ;i++){
        const result = await fn();

        if(result.includes(FixResult.Alleviated)) {
            alleviated = true;
            continue;
        }
        if(result.every(r => r === FixResult.NoConflict)){
            return FixResult.NoConflict;
        }

        if(result.includes(FixResult.Failed)){
            return alleviated
                ? FixResult.Alleviated
                : FixResult.Failed
            ;
        }

    }

    throw new Error('too many loop');

}

export function createLogFunction(prefix:string) {
    return function (stringArr:TemplateStringsArray, ...values:any[]){
        if(!DEBUG) return;

        let message = [stringArr[0]];
        for (let index = 0; index < values.length; index++) {
            message.push(values[index], stringArr[index+1]);
        }
        console.log(`${prefix} #`, ...message);
    };
}
