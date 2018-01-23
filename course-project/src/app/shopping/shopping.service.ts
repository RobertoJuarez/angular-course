import { EventEmitter, Injectable, Output } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';
import { IngredientAddedEvent } from './ingredient-added-event';
import { IngredientDeletedEvent } from './ingredient-deleted-event';
import { IngredientListClearedEvent } from './ingredient-list-cleared-event';


@Injectable()
export class ShoppingService {


  private _ingredients: IngredientModel[];

  private _ingredientAddedEventEmitter: EventEmitter< IngredientAddedEvent >;

  private _ingredientDeletedEventEmitter: EventEmitter< IngredientDeletedEvent >;

  private _ingredientListClearedEventEmitter: EventEmitter< IngredientListClearedEvent >;



  constructor() {

    this._ingredients = [];

    this._ingredientAddedEventEmitter = new EventEmitter< IngredientAddedEvent >();

    this._ingredientDeletedEventEmitter = new EventEmitter< IngredientDeletedEvent >();

    this._ingredientListClearedEventEmitter = new EventEmitter< IngredientListClearedEvent >();
  }


  get ingredients(): IngredientModel[] {

    return this._ingredients.slice();
  }


  addIngredient( ingredient: IngredientModel ): void {

    this._ingredients.push( ingredient );
  }


  deleteIngredient( ingredient: IngredientModel ): void {

    let ingredientIndex = 0;

    for( let k: number; k < this._ingredients.length; k++ ) {

      if( this._ingredients[ k ].name === ingredient.name && this._ingredients[ k ].amount === ingredient.amount ) {

        ingredientIndex = k;

        break;
      }
    }

    this._ingredients.splice( ingredientIndex, 1 );
  }


  clearIngredients(): void {

    this._ingredients = [];
  }


  @Output( 'ingredientAddedEvent' )
  get ingredientAddedEventEmitter(): EventEmitter< IngredientAddedEvent > {

    return this._ingredientAddedEventEmitter;
  }


  @Output( 'ingredientDeletedEvent' )
  get ingredientDeletedEventEmitter(): EventEmitter< IngredientDeletedEvent > {

    return this._ingredientDeletedEventEmitter;
  }


  @Output( 'ingredientListClearedEvent' )
  get ingredientListClearedEventEmitter(): EventEmitter< IngredientListClearedEvent > {

    return this._ingredientListClearedEventEmitter;
  }

}
