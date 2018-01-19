import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { RecipeSelectedEvent } from '../recipe-selected-event';
import { BaseComponent } from '../../shared/base-component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent extends BaseComponent implements OnInit {


  private _model: RecipeModel;


  constructor( private recipeService: RecipeService ) {
    super();
  }


  ngOnInit() {
  }


  @Input()
  get model(): RecipeModel {
    return this._model;
  }


  set model( value: RecipeModel ) {
    this._model = value;
  }


  public handleRecipeLinkClick(): void {

    this.recipeService.recipeSelectedEventEmitter.emit( new RecipeSelectedEvent( this._model ) );
  }

}
