import Event from "@engine/event";

export const enum ConstLevel{
    No = 0,
    Few = 1,
    Normal = 3,
    Expensive = 10,
}
export const enum DateBy{
    Year = 'year',
    Month = 'month',
    Quarter = 'quarter',
    Week = 'week',
    Day = 'day',
}
export type Count = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export interface ComponentDrawInfo{
    box: Readonly<Box>;
}

export interface Coordinate{
    x: number,
    y: number,
}
export interface Box extends Coordinate{
    width: number,
    height: number,
}
export interface Line{
    startX: number;
    startY: number;
    endX: number;
    endY:number;
}

export interface GridConfig{
    eventOffset: Event['drawInfo']['offset'];

    minEventAxisOffset: number;

    markWidth: number;
    markHeight?: number;

    scaleHeight: number;
    axisWidth: number;
    axisStart: Coordinate;
    eventWidth: number;
    canvasWidth: number;
}
