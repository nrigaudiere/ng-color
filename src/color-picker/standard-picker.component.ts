import { Component, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as convert from 'color-convert';
import { ColorPickerBaseComponent } from './color-picker-base';

@Component({
    selector: 'ng-color-basic',
    template: `
        <saturation-lightness-box [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()"></saturation-lightness-box>
        <hue [(ngModel)]="hue" (ngModelChange)="calculateColor()"></hue>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPicker),
        multi: true
    }]
})
export class ColorPicker extends ColorPickerBaseComponent {

}
