import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';
import { IngredientAddedEvent } from './ingredient-added-event';
import { IngredientDeletedEvent } from './ingredient-deleted-event';
import { IngredientListClearedEvent } from './ingredient-list-cleared-event';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ShoppingService {


  private _ingredients: IngredientModel[];

  private _ingredientAddedEventSubject: Subject< IngredientAddedEvent >;

  private _ingredientDeletedEventSubject: Subject< IngredientDeletedEvent >;

  private _ingredientListClearedEventSubject: Subject < IngredientListClearedEvent >;



  constructor() {

    this._ingredients = [];

    this._ingredientAddedEventSubject = new Subject< IngredientAddedEvent >();

    this._ingredientDeletedEventSubject = new Subject< IngredientDeletedEvent>();

    this._ingredientListClearedEventSubject = new Subject< IngredientListClearedEvent >();
  }


  get ingredients(): IngredientModel[] {

    return this._ingredients.slice();
  }


  addIngredient( ingredient: IngredientModel ): void {

    this._ingredients.push( ingredient );
  }


  deleteIngredient( ingredient: IngredientModel ): void {

    let ingredientIndex = -1;

    for( let k = 0; k < this._ingredients.length; k++ ) {

      if( this._ingredients[ k ].name === ingredient.name && this._ingredients[ k ].amount === ingredient.amount ) {

        ingredientIndex = k;

        break;
      }
    }

    if( ingredientIndex > -1 ) {

      this._ingredients.splice( ingredientIndex, 1 );
    }
  }


  clearIngredients(): void {

    this._ingredients = [];
  }


  get ingredientAddedEventSubject(): Subject<IngredientAddedEvent> {

    return this._ingredientAddedEventSubject;
  }


  get ingredientDeletedEventSubject(): Subject< IngredientDeletedEvent > {

    return this._ingredientDeletedEventSubject;
  }


  get ingredientListClearedEventSubject(): Subject<IngredientListClearedEvent> {

    return this._ingredientListClearedEventSubject;
  }

}
