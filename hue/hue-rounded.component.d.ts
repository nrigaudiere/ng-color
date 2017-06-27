import { ElementRef } from '@angular/core';
import { ColorService } from '../services/color.service';
import { MouseHandlerOutput } from '../mouse-handler-output';
import { HueBase } from './hue-base';
export declare class HueRoundedComponent extends HueBase {
    private colorService;
    private color;
    constructor(colorService: ColorService, el: ElementRef);
    setHue(mouseEvent: MouseHandlerOutput): void;
    writeValue(v: number): void;
}
