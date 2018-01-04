import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  private _model: RecipeModel;


  constructor() { }


  ngOnInit() {
  }


  @Input()
  get model(): RecipeModel {
    return this._model;
  }


  set model( value: RecipeModel ) {
    this._model = value;
  }

}
