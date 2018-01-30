import { Injectable } from '@angular/core';
import { RecipeModel } from './recipe-model';
import { IngredientModel } from '../shared/ingredient-model';



@Injectable()
export class RecipeService {

  private _recipes: RecipeModel[];


  constructor() {

    this.initiateRecipes();
  }


  private initiateRecipes(): void {

    this._recipes = [
      new RecipeModel( 'a', 'Brownie', 'Mmm, so tasty!', 'https://upload.wikimedia.org/wikipedia/commons/7/74/Brownies_recipe.png',
        [ new IngredientModel( 'Chocolate', 4 ), new IngredientModel( 'Bread', 12 ) ] ),

      new RecipeModel( 'b', 'Egg Fry', 'It may be goot at night', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Egg_Fry_Recipe.png',
        [ new IngredientModel( 'Eggs', 2 ), new IngredientModel( 'French Fries', 20 ) ] ),

      new RecipeModel( 'c', 'Potatoes', 'They are so cute!', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Potatoes.png',
        [ new IngredientModel( 'Potatoes', 4 ), new IngredientModel( 'Sauce', 6 ) ] ),
    ];
  }


  get recipes(): RecipeModel[] {

    return this._recipes.slice();
  }


  getRecipeById( id: string ): RecipeModel {

    for( const recipe of this._recipes ) {

      if( recipe.id === id ) {

        return recipe;
      }
    }

    return null;
  }

}
