import { Component, OnInit } from '@angular/core';
import { RecipeSelectedEvent } from './recipe-selected-event';
import { RecipeModel } from './recipe-model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {


  private _selectedRecipe: RecipeModel;


  constructor( private recipeService: RecipeService ) { }


  ngOnInit() {

    this.recipeService.recipeSelectedEventEmitter.subscribe( ( event: RecipeSelectedEvent )  => this.handleRecipeSelectedEvent( event ) );
  }


  get selectedRecipe(): RecipeModel {

    return this._selectedRecipe;
  }


  set selectedRecipe( value: RecipeModel ) {

    this._selectedRecipe = value;
  }


  private handleRecipeSelectedEvent( recipeSelectedEvent: RecipeSelectedEvent ): void {

    this.selectedRecipe = recipeSelectedEvent.recipe;
  }


}
