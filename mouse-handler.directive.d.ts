import { ElementRef, EventEmitter } from '@angular/core';
import { MouseHandlerOutput } from './mouse-handler-output';
export declare class MouseHandlerDirective {
    private el;
    newValue: EventEmitter<MouseHandlerOutput>;
    slider: string;
    rgX: number;
    rgY: number;
    private listenerMove;
    private listenerStop;
    constructor(el: ElementRef);
    private setCursor(event);
    private move(event);
    private start(event);
    private stop();
    private getX(event);
    private getY(event);
}
