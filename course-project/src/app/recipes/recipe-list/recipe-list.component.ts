import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { RecipeSelectedEvent } from '../recipe-selected-event';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  private _recipes: RecipeModel[];

  private _recipeSelectedEventEmitter: EventEmitter< RecipeSelectedEvent >;


  constructor( private recipeService: RecipeService ) {

    this._recipeSelectedEventEmitter = new EventEmitter<RecipeSelectedEvent>();
  }


  ngOnInit() {

    this._recipes = this.recipeService.recipes;
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
