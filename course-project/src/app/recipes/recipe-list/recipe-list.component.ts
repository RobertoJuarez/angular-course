import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  private _recipes: RecipeModel[];


  constructor( private recipeService: RecipeService ) {}


  ngOnInit() {

    this._recipes = this.recipeService.recipes;
  }


  get recipes(): RecipeModel[] {

    return this._recipes;
  }


  set recipes( value: RecipeModel[] ) {

    this._recipes = value;
  }

}
