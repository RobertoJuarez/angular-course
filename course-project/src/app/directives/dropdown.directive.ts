import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  private _isOpen: boolean;


  constructor() {

    this._isOpen = false;
  }


  @HostBinding( 'class.open' )
  get isOpen(): boolean {

    return this._isOpen;
  }


  @HostListener( 'click' )
  public handleClickEvent(): void {

    this._isOpen = !this._isOpen;
  }

}
