import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {


  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef ) { }


  @Input( 'appUnless' )
  set condition( condition: boolean ) {

    if( !condition ) {

      this.viewContainerRef.createEmbeddedView( this.templateRef );
    }else {

      this.viewContainerRef.clear();
    }
  }

}