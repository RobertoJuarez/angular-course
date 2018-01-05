import { Component, OnInit } from '@angular/core';
import { IngredientAddedEvent } from './ingredient-added-event';
import { IngredientModel } from '../shared/ingredient-model';
import { BaseComponent } from '../shared/base-component';
import { IngredientListClearedEvent } from './ingredient-list-cleared-event';
import { IngredientDeletedEvent } from './ingredient-deleted-event';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent extends BaseComponent implements OnInit {

  private _ingredients: IngredientModel[];


  constructor() {
    super();

    this._ingredients = [];
  }


  ngOnInit() {
  }


  get ingredients(): IngredientModel[] {
    return this._ingredients;
  }


  public handleIngredientAddedEvent( event: IngredientAddedEvent ): void {

    this._ingredients.push( event.ingredient );
  }

  public handleIngredientDeletedEvent( event: IngredientDeletedEvent ): void {

    // TODO: implement this method
  }


  public handleIngredientListClearedEvent( event: IngredientListClearedEvent ): void {

    this._ingredients = [];
  }

}
