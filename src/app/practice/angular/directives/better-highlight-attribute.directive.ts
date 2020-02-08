import {
    Directive,
    OnInit,
    Renderer2,
    ElementRef,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightAttributeDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'skyblue';
    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
