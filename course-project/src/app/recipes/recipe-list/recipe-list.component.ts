import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  private _recipes: RecipeModel[];


  constructor() {

    this._recipes = [];
  }


  ngOnInit() {
  }


  get recipes(): RecipeModel[] {

    return this._recipes;
  }


  set recipes( value: RecipeModel[] ) {

    this._recipes = value;
  }

}
