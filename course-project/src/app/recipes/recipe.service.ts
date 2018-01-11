import { Injectable } from '@angular/core';
import { RecipeModel } from './recipe-model';



@Injectable()
export class RecipeService {


  private _recipes: RecipeModel[];


  constructor() {

    this.initiateRecipes();
  }


  private initiateRecipes(): void {
    this._recipes = [
      new RecipeModel( 'Brownie', 'Mmm, so tasty!', 'https://upload.wikimedia.org/wikipedia/commons/7/74/Brownies_recipe.png' ),
      new RecipeModel( 'Egg Fry', 'It may be goot at night', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Egg_Fry_Recipe.png' ),
      new RecipeModel( 'Potatoes', 'They are so cute!', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Potatoes.png' )
    ];
  }


  get recipes(): RecipeModel[] {

    return this._recipes.slice();
  }

}
