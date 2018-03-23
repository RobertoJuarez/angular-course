import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';
import { IngredientAddedEvent } from './ingredient-added-event';
import { IngredientDeletedEvent } from './ingredient-deleted-event';
import { IngredientListClearedEvent } from './ingredient-list-cleared-event';
import { Subject } from 'rxjs/Subject';
import { ShoppingApiService } from './api/shopping-api.service';


@Injectable()
export class ShoppingService {


  private _ingredientAddedEventSubject: Subject< IngredientAddedEvent >;

  private _ingredientDeletedEventSubject: Subject< IngredientDeletedEvent >;

  private _ingredientListClearedEventSubject: Subject < IngredientListClearedEvent >;



  constructor( private shoppingApiService: ShoppingApiService ) {

    this._ingredientAddedEventSubject = new Subject< IngredientAddedEvent >();

    this._ingredientDeletedEventSubject = new Subject< IngredientDeletedEvent>();

    this._ingredientListClearedEventSubject = new Subject< IngredientListClearedEvent >();
  }


  get ingredients(): IngredientModel[] {

    return [];
  }


  addIngredient( ingredient: IngredientModel ): void {

    this.shoppingApiService.add( ingredient ).subscribe(
      ( response ) => console.log( response ),
      ( error ) => console.log( error )
    );
  }


  deleteIngredient( ingredient: IngredientModel ): void {
  }


  clearIngredients(): void {
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
