import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrams]'
})
export class PramsDirective {
  constructor(private Element: ElementRef) {
    this.Element.nativeElement.style.color = "red";
    console.log(this.Element)
  }

}
