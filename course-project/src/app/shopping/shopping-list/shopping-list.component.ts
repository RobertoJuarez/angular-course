import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient-model';
import { BaseComponent } from '../../shared/base-component';
import { ShoppingService } from '../shopping.service';
import { IngredientAddedEvent } from '../ingredient-added-event';
import { IngredientDeletedEvent } from '../ingredient-deleted-event';
import { IngredientListClearedEvent } from '../ingredient-list-cleared-event';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent extends BaseComponent implements OnInit, OnDestroy {


  private ingredientDeletedEventSubscription: Subscription;

  private ingredientListClearedEventSubscription: Subscription;


  constructor( private shoppingService: ShoppingService ) {
    super();
  }


  ngOnInit() {

    this.ingredientDeletedEventSubscription =
      this.shoppingService.ingredientDeletedEventSubject.subscribe( event => this.handleIngredientDeletedEvent( event ) );

    this.ingredientListClearedEventSubscription =
      this.shoppingService.ingredientListClearedEventSubject.subscribe( event => this.handleIngredientListClearedEvent( event ) );
  }


  ngOnDestroy() {

    this.ingredientDeletedEventSubscription.unsubscribe();

    this.ingredientListClearedEventSubscription.unsubscribe();
  }


  get ingredients(): IngredientModel[] {

    return this.shoppingService.ingredients;
  }


  private handleIngredientDeletedEvent( event: IngredientDeletedEvent ): void {

    this.shoppingService.deleteIngredient( event.ingredient );
  }


  private handleIngredientListClearedEvent( event: IngredientListClearedEvent ): void {

    this.shoppingService.clearIngredients();
  }

}
