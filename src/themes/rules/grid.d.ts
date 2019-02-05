/**
 * Extend the ExtData of engine to used a globally data object between components.
 * */
import { GridConfig } from '@engine/types';

declare module '@engine/types' {
    export interface GridConfig{
        milestoneLineWidth :number;
    }
}
