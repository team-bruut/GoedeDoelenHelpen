import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRoundedButton]'
})
export class RoundedButtonDirective {

  @Input() backgroundColor: string;
  @Input() marginTop: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.marginTop = this.marginTop;
    this.el.nativeElement.style.borderRadius = '15px';
  }
}
