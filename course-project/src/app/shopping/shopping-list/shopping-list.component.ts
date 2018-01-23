import { Component, Input, OnInit } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient-model';
import { BaseComponent } from '../../shared/base-component';
import { ShoppingService } from '../shopping.service';
import { IngredientAddedEvent } from '../ingredient-added-event';
import { IngredientDeletedEvent } from '../ingredient-deleted-event';
import { IngredientListClearedEvent } from '../ingredient-list-cleared-event';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent extends BaseComponent implements OnInit {


  constructor( private shoppingService: ShoppingService ) {
    super();
  }


  ngOnInit() {

    this.shoppingService.ingredientAddedEventEmitter.subscribe( event => this.handleIngredientAddedEvent( event ) );

    this.shoppingService.ingredientDeletedEventEmitter.subscribe( event => this.handleIngredientDeletedEvent( event ) );

    this.shoppingService.ingredientListClearedEventEmitter.subscribe( event => this.handleIngredientListClearedEvent( event ) );
  }


  get ingredients(): IngredientModel[] {

    return this.shoppingService.ingredients;
  }


  private handleIngredientAddedEvent( event: IngredientAddedEvent ): void {

    this.shoppingService.addIngredient( event.ingredient );
  }


  private handleIngredientDeletedEvent( event: IngredientDeletedEvent ): void {

    this.shoppingService.deleteIngredient( event.ingredient );
  }


  private handleIngredientListClearedEvent( event: IngredientListClearedEvent ): void {

    this.shoppingService.clearIngredients();
  }

}
