import { DomSanitizer } from '@angular/platform-browser';
import { Vector } from '../vector';
export declare class CursorComponent {
    private sanitizer;
    position: Vector;
    bothAxis: boolean;
    lightness: number;
    constructor(sanitizer: DomSanitizer);
}
