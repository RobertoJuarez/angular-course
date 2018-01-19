import { Component, OnInit } from '@angular/core';
import { IngredientAddedEvent } from './ingredient-added-event';
import { IngredientModel } from '../shared/ingredient-model';
import { BaseComponent } from '../shared/base-component';
import { IngredientListClearedEvent } from './ingredient-list-cleared-event';
import { IngredientDeletedEvent } from './ingredient-deleted-event';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent extends BaseComponent implements OnInit {


  private _ingredients: IngredientModel[];


  constructor( private shoppingService: ShoppingService ) {
    super();
  }


  ngOnInit() {

    this._ingredients = this.shoppingService.ingredients;

    this.shoppingService.ingredientAddedEventEmitter.subscribe( event => this.handleIngredientAddedEvent( event ) );

    this.shoppingService.ingredientDeletedEventEmitter.subscribe( event => this.handleIngredientDeletedEvent( event ) );

    this.shoppingService.ingredientListClearedEventEmitter.subscribe( event => this.handleIngredientListClearedEvent( event ) );
  }


  get ingredients(): IngredientModel[] {

    return this._ingredients;
  }


  private handleIngredientAddedEvent( event: IngredientAddedEvent ): void {

    this._ingredients.push( event.ingredient );
  }


  private handleIngredientDeletedEvent( event: IngredientDeletedEvent ): void {

    // TODO: implement this method
  }


  private handleIngredientListClearedEvent( event: IngredientListClearedEvent ): void {

    this._ingredients = [];
  }

}
