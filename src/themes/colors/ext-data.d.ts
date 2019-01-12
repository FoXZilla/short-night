/**
 * Extend the ExtData of engine to used a globally data object between components.
 * */
import { ExtData } from '@engine/extensions';
import { RoughCanvas } from 'roughjs/bin/canvas';

declare module '@engine/extensions' {
    export interface ExtData{
        roughCanvas :RoughCanvas;
    }
}
