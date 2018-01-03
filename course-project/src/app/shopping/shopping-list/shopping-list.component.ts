import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  private _ingredients: IngredientModel[];


  constructor() {

    this._ingredients = [];
  }


  ngOnInit() {
  }


  get ingredients(): IngredientModel[] {
    return this._ingredients;
  }


  set ingredients( value: IngredientModel[] ) {
    this._ingredients = value;
  }

}
