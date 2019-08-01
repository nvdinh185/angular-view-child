import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrams]'
})
export class PramsDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "red";
    console.log(this.el)
  }

}
