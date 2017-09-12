import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'rgba(228, 17, 5, 0.5)';
 }

}
