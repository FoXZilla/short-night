import { ExtData } from '@engine/extensions';
import { RoughCanvas } from 'roughjs/bin/canvas';

declare module "@engine/extensions" {
    export interface ExtData{
        roughCanvas :RoughCanvas;
    }
}
