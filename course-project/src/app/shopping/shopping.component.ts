import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/base-component';
import { CanDeactivateComponent } from '../shared/guards/can-deactivate-component';
import { Observable } from 'rxjs/Observable';
import { ShoppingService } from './shopping.service';
import { Router } from '@angular/router';
import { AppRoutes } from '../app-routes';
import { IngredientAddedEvent } from './ingredient-added-event';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent extends BaseComponent implements  OnInit, CanDeactivateComponent, OnDestroy {


  private ingredientAdded: boolean;

  private ingredientAddedEventSubscription: Subscription;


  constructor( private shoppingService: ShoppingService, private router: Router  ) {
    super();

    this.ingredientAdded = false;
  }


  ngOnInit() {

    this.ingredientAddedEventSubscription =
      this.shoppingService.ingredientAddedEventSubject.subscribe( event => this.handleIngredientAddedEvent( event ) );
  }


  ngOnDestroy() {

    this.ingredientAddedEventSubscription.unsubscribe();
  }


  private handleIngredientAddedEvent( event: IngredientAddedEvent ): void {

    this.shoppingService.addIngredient( event.ingredient );

    this.ingredientAdded = true;

    this.router.navigate( [ AppRoutes.RECIPES ] );
  }


  public canDeactivate(): Observable< boolean> | Promise< boolean > | boolean {

    if( this.ingredientAdded ) {

      return true;
    }else {

      return confirm( 'Are you sure you want to leave without adding any ingredient?' );
    }
  }

}
