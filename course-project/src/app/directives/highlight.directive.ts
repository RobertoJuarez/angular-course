import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {


  private _hoverColor: string;

  @HostBinding( 'style.backgroundColor' ) private _backgroundColor: string;


  constructor() {

    this._hoverColor = 'green';
  }


  ngOnInit() {
  }


  @Input()
  get hoverColor() {
    return this._hoverColor;
  }


  set hoverColor( value: string ) {

    this._hoverColor = value;
  }


  @HostListener( 'mouseenter' )
  public handleMouseEnter( event: Event ) {

    this._backgroundColor = this._hoverColor;
  }


  @HostListener( 'mouseleave' )
  public handleMouseLeave( event: Event ) {

    this._backgroundColor = 'transparent';
  }

}
