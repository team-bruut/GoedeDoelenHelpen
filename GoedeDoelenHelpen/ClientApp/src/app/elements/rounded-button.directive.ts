import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRoundedButton]'
})
export class RoundedButtonDirective {

  constructor(private el: ElementRef) { }

  @Input() highlightColor: string;

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
