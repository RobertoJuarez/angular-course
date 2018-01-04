import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { RecipeSelectedEvent } from '../recipe-selected-event';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  private _recipes: RecipeModel[];

  private _recipeSelectedEventEmitter: EventEmitter< RecipeSelectedEvent >;


  constructor() {

    this._recipes = [
     new RecipeModel( 'Brownie', 'Mmm, so tasty!', 'https://upload.wikimedia.org/wikipedia/commons/7/74/Brownies_recipe.png' ),
     new RecipeModel( 'Egg Fry', 'It may be goot at night', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Egg_Fry_Recipe.png' ),
      new RecipeModel( 'Potatoes', 'They are so cute!', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Potatoes.png' )
    ];

    this._recipeSelectedEventEmitter = new EventEmitter<RecipeSelectedEvent>();
  }


  ngOnInit() {
  }


  get recipes(): RecipeModel[] {

    return this._recipes;
  }


  set recipes( value: RecipeModel[] ) {

    this._recipes = value;
  }


  @Output( 'recipeSelectedEvent' )
  get recipeSelectedEventEmitter(): EventEmitter< RecipeSelectedEvent > {

    return this._recipeSelectedEventEmitter;
  }


  public handleRecipeSelectedEvent( recipeSelectedEvent: RecipeSelectedEvent ): void {

    this.recipeSelectedEventEmitter.emit( new RecipeSelectedEvent( recipeSelectedEvent.recipe ) );
  }

}
