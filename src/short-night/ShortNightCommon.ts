export interface Component{
    init():void;
    draw():void;
};
export interface Position extends Array<number>{
    '0': number;
    '1': number;
};
export interface Box{
    width:number;
    height:number;
    x:number;
    y:number;
};