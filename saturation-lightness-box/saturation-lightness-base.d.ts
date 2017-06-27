import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MouseHandlerOutput } from '../mouse-handler-output';
import { Vector } from '../vector';
export interface SaturationLightness {
    saturation: number;
    lightness: number;
}
export declare class SaturationLightnessBase implements ControlValueAccessor {
    private el;
    cursorPosition: Vector;
    hue: number;
    private saturation;
    private lightness;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(el: ElementRef);
    setSaturationLightness(mouseEvent: MouseHandlerOutput): void;
    hsl(): string;
    value: SaturationLightness;
    writeValue(v: SaturationLightness): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
