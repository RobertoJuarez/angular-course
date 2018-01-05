import { Component, Input, OnInit } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient-model';
import { BaseComponent } from '../../shared/base-component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent extends BaseComponent implements OnInit {


  private _ingredients: IngredientModel[];


  constructor() {

    super();

    this._ingredients = [];
  }


  ngOnInit() {
  }


  @Input()
  get ingredients(): IngredientModel[] {

    return this._ingredients;
  }


  set ingredients( value: IngredientModel[] ) {

    this._ingredients = value;
  }

}
