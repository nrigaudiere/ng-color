import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SaturationLightness } from '../saturation-lightness-box/saturation-lightness-base';
export interface HueSaturationLightness {
    hue: number;
    saturation: number;
    lightness: number;
}
export interface ColorOutput {
    rgb: RGB;
    hex: number;
    hexString: string;
}
export interface RGB {
    red: number;
    green: number;
    blue: number;
}
export declare class ColorPickerBaseComponent implements ControlValueAccessor, OnInit {
    saturationLightness: SaturationLightness;
    hue: number;
    colorChange: EventEmitter<ColorOutput>;
    startHex: string;
    private onTouchedCallback;
    private onChangeCallback;
    constructor();
    ngOnInit(): void;
    calculateColor(): void;
    value: ColorOutput;
    writeValue(v: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private calculateHslFromHex(v);
    readonly currentColor: ColorOutput;
    private createColorOutput(hue, saturation, lightness);
}
