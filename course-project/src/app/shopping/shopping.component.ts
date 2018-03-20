import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/base-component';
import { CanDeactivateComponent } from '../shared/guards/can-deactivate-component';
import { Observable } from 'rxjs/Observable';
import { ShoppingService } from './shopping.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent extends BaseComponent implements  OnInit, CanDeactivateComponent {


  private ingredientAdded: boolean;


  constructor( private shoppingService: ShoppingService ) {
    super();

    this.ingredientAdded = false;
  }


  ngOnInit() {

    this.shoppingService.ingredientAddedEventEmitter.subscribe( event => this.ingredientAdded = true );
  }


  public canDeactivate(): Observable< boolean> | Promise< boolean > | boolean {

    if( this.ingredientAdded ) {

      return true;
    }else {

      return confirm( 'Are you sure you want to leave without adding any ingredient?' );
    }
  }

}
