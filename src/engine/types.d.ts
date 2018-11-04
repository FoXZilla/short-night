import Tipy from "@engine/tipy";

export const enum SN{
    TimeLine = 'time_line',
    Axis = 'axis',
    AxisBody = 'axis_body',
    AxisScale = 'axis_scale',
    AxisMilestone = 'axis_milestone',
    Event = 'event',
    EventBody = 'event_body',
    EventMark = 'event_mark',
    EventAxis = 'event_axis',
}
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
    tipy: Tipy;
    canvas: HTMLCanvasElement;
    container: HTMLElement;
    box: Box;

    debug?: any,
}

export interface Box{
    x: number,
    y: number,
    width: number,
    height: number,
}
export interface Line{
    startX: number;
    startY: number;
    endX: number;
    endY:number;
}
