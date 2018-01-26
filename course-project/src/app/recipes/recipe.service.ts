import { EventEmitter, Injectable, Output } from '@angular/core';
import { RecipeModel } from './recipe-model';
import { RecipeSelectedEvent } from './recipe-selected-event';
import { IngredientModel } from '../shared/ingredient-model';



@Injectable()
export class RecipeService {

  private _recipes: RecipeModel[];

  private _recipeSelectedEventEmitter: EventEmitter< RecipeSelectedEvent >;



  constructor() {

    this.initiateRecipes();

    this._recipeSelectedEventEmitter = new EventEmitter<RecipeSelectedEvent>();
  }


  private initiateRecipes(): void {

    this._recipes = [
      new RecipeModel( 'Brownie', 'Mmm, so tasty!', 'https://upload.wikimedia.org/wikipedia/commons/7/74/Brownies_recipe.png',
        [ new IngredientModel( 'Chocolate', 4 ), new IngredientModel( 'Bread', 12 ) ] ),

      new RecipeModel( 'Egg Fry', 'It may be goot at night', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Egg_Fry_Recipe.png',
        [ new IngredientModel( 'Eggs', 2 ), new IngredientModel( 'French Fries', 20 ) ] ),

      new RecipeModel( 'Potatoes', 'They are so cute!', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Potatoes.png',
        [ new IngredientModel( 'Potatoes', 4 ), new IngredientModel( 'Sauce', 6 ) ] ),
    ];
  }


  get recipes(): RecipeModel[] {

    return this._recipes.slice();
  }


  @Output( 'recipeSelectedEvent' )
  get recipeSelectedEventEmitter(): EventEmitter< RecipeSelectedEvent > {

    return this._recipeSelectedEventEmitter;
  }

}
