import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({ 
    selector: '[idLabCustom1AttributeDirective]'
})

export class idLabCustomAttributeDirective implements OnInit {
    constructor(private el: ElementRef) {

    }
    @HostListener('mouseenter') onmouseenter() {
        this.manipulatecolor('green');
    }
    @HostListener('mouseleave') onmouseleave() {
        this.manipulatecolor(null);
    }
ngOnInit() {
    console.log('custom1 directive inititated');
    // this.el.nativeElement.style.backgroundColor = 'red';
}
private manipulatecolor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
}
}
