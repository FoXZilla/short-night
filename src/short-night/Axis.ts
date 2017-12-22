import {Component,Position,Box} from '@/src/short-night/ShortNightCommon.ts';

import AxisLine from '@/src/short-night/AxisLine.ts';
import Milestone from '@/src/short-night/Milestone.ts';
import AxisScale from '@/src/short-night/AxisScale.ts';
import Tipy from '@/src/short-night/Tipy.ts';

abstract class AxisMeta{
    el:HTMLElement;
    length:number;
    width:number;
    scales:[number];
    milestones:[number];
    tipy:Tipy;
};

export default class Axis extends AxisMeta implements Component,Box{
    $axisScales:AxisScale[];
    $axisLine:AxisLine;
    $milestones:Milestone[];
    constructor(meta:AxisMeta){
        super();
        this.$axisScales =null;
        this.$axisLine =null;
        this.$milestones =null;

        Object.assign(this,meta);
    };
    init(){};
    draw(){};
    get height(){return this.length};
    _el:HTMLElement;
    x:number;
    y:number;
};