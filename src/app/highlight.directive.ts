import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
      this.el.nativeElement.style.color = "blue";
      console.log(this.el.nativeElement.style.color)
    }
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
    @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.color = "red";
      this.highlight("blue");
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
}