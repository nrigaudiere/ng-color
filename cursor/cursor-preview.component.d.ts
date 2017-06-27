import { DomSanitizer } from '@angular/platform-browser';
import { Vector } from '../vector';
export declare class CursorPreviewComponent {
    private sanitizer;
    position: Vector;
    bothAxis: boolean;
    lightness: number;
    color: string;
    constructor(sanitizer: DomSanitizer);
}
