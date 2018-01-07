import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[appBsbtn]'
})
export class BsbtnDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, 'btn-success', true);
  }

}
