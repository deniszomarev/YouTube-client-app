import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input() cardDate: string = '';
  public currentDate: string = '2019-09-16T19:52:11.137Z';
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    const dateDiff: number = Math.ceil(
      (new Date(this.cardDate).getTime() -
        new Date(this.currentDate).getTime()) /
        (1000 * 3600 * 24)
    );
    this.setColorByDate(dateDiff);
  }
  private setColorByDate(dateDiff: number) {
    const cardFooter = this.elementRef.nativeElement.lastChild.lastChild;
    if (Math.abs(dateDiff) <= 7) {
      cardFooter.style.background = 'blue';
    } else if (Math.abs(dateDiff) <= 31) {
      cardFooter.style.background = 'green';
    } else if (Math.abs(dateDiff) <= 186) {
      cardFooter.style.background = 'yellow';
    } else if (Math.abs(dateDiff) > 186) {
      cardFooter.style.background = 'red';
    }
  }
}
