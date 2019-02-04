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

/**
 * The box in the Container and the Canvas of component.
 * The box should contain all trace of component.
 * */
export interface ComponentDrawInfo{
    box: Readonly<Box>;
}

/**
 * All component's config of what style to draw.
 * E.g. The border width of Axis.
 * Must be filled before apply() called.
 * */
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
    canvas?: HTMLCanvasElement;
    container?: HTMLElement;
}

export type TimelineData = any; // TODO
