import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({ 
    selector: '[idLabCustomAttributeDirective]'
})

export class IdLabCustomeAttributeDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {

    }
ngOnInit() {
    console.log('directive inititated');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
}
}
