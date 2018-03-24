import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';
import { IngredientAddedEvent } from './ingredient-added-event';
import { IngredientDeletedEvent } from './ingredient-deleted-event';
import { IngredientListClearedEvent } from './ingredient-list-cleared-event';
import { Subject } from 'rxjs/Subject';
import { ShoppingApiService } from './api/shopping-api.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ShoppingService {


  private _ingredientAddedEventSubject: Subject< IngredientAddedEvent >;

  private _ingredientListClearedEventSubject: Subject < IngredientListClearedEvent >;



  constructor( private shoppingApiService: ShoppingApiService ) {

    this._ingredientAddedEventSubject = new Subject< IngredientAddedEvent >();

    this._ingredientListClearedEventSubject = new Subject< IngredientListClearedEvent >();
  }


  get ingredients(): Observable< IngredientModel[] > {

    return this.shoppingApiService.findAll();
  }


  addIngredient( ingredient: IngredientModel ): void {

    this.shoppingApiService.add( ingredient ).subscribe(
      ( response ) => console.log( response ),
      ( error ) => console.log( error )
    );
  }


  deleteIngredient( ingredient: IngredientModel ): Observable< Response > {

    return this.shoppingApiService.delete( ingredient );
  }


  clearIngredients(): Observable< Response > {

    return this.shoppingApiService.deleteAll();
  }


  get ingredientAddedEventSubject(): Subject<IngredientAddedEvent> {

    return this._ingredientAddedEventSubject;
  }


  get ingredientListClearedEventSubject(): Subject<IngredientListClearedEvent> {

    return this._ingredientListClearedEventSubject;
  }

}
