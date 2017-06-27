import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MouseHandlerOutput } from '../mouse-handler-output';
import { Vector } from '../vector';
export declare class HueBase implements ControlValueAccessor {
    private el;
    selectedHue: number;
    cursorPosition: Vector;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(el: ElementRef);
    setHue(mouseEvent: MouseHandlerOutput): void;
    value: number;
    writeValue(v: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
