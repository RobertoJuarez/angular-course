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
