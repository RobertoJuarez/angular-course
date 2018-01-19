import { EventEmitter, Injectable, Output } from '@angular/core';
import { RecipeModel } from './recipe-model';
import { RecipeSelectedEvent } from './recipe-selected-event';



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
      new RecipeModel( 'Brownie', 'Mmm, so tasty!', 'https://upload.wikimedia.org/wikipedia/commons/7/74/Brownies_recipe.png' ),
      new RecipeModel( 'Egg Fry', 'It may be goot at night', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Egg_Fry_Recipe.png' ),
      new RecipeModel( 'Potatoes', 'They are so cute!', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Potatoes.png' )
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
