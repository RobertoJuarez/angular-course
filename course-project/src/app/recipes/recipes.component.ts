import { Component, OnInit } from '@angular/core';
import { RecipeSelectedEvent } from './recipe-selected-event';
import { RecipeModel } from './recipe-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  private _selectedRecipe: RecipeModel;


  constructor() { }

  ngOnInit() {
  }


  get selectedRecipe(): RecipeModel {
    return this._selectedRecipe;
  }

  set selectedRecipe( value: RecipeModel ) {
    this._selectedRecipe = value;
  }


  public handleRecipeSelectedEvent( recipeSelectedEvent: RecipeSelectedEvent ): void {

    this.selectedRecipe = recipeSelectedEvent.recipe;
  }


}
