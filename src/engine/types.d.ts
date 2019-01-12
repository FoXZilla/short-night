import { ExtensionManager } from '@engine';

// Base types

export interface Coordinate{
    x: number;
    y: number;
}
export interface Box extends Coordinate{
    width: number;
    height: number;
}
export interface Line{
    startX: number;
    startY: number;
    endX: number;
    endY:number;
}

export const enum DateBy{
    Year = 'year',
    Month = 'month',
    Quarter = 'quarter',
    Week = 'week',
    Day = 'day',
}

// Types about Component

export interface ComponentDrawInfo{
    box: Readonly<Box>;
}

export interface GridConfig{
    eventOffset: Coordinate;

    minEventAxisOffset: number;

    markWidth: number;
    markHeight?: number;

    scaleHeight: number;
    axisWidth: number;
    axisStart: Coordinate;
    eventWidth: number;
    canvasWidth: number;
}

export const enum ConflictFixResult {
    Failed = 'failed', // the conflict cannot be fixed
    Alleviated = 'alleviated', // fixed, but still has conflict
    NoConflict = 'no-conflict', // no conflict or all conflict have been fixed
}

export interface ComponentConstructorInfo {
    ext: ExtensionManager;
    grid?: GridConfig;
    canvas?: HTMLCanvasElement;
    container?: HTMLElement;
}
