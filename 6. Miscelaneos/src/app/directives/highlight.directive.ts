import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) {
    
  }

  @Input('appHighlight') newColor: string;

  @HostListener('mouseenter') mouseInside(){
    this.stickOut(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') onmouseout(){
    this.stickOut(null);
  }

  private stickOut(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
