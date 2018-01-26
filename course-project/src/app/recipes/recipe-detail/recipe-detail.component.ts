import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { ShoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  private _model: RecipeModel;


  constructor( private shoppingService: ShoppingService ) { }


  ngOnInit() {
  }


  @Input()
  get model(): RecipeModel {
    return this._model;
  }


  set model( value: RecipeModel ) {
    this._model = value;
  }


  public handleClickOnToShoppingListLink(): void {

    for ( const ingredient of this._model.ingredients ) {

      this.shoppingService.addIngredient( ingredient );
    }
  }

}
