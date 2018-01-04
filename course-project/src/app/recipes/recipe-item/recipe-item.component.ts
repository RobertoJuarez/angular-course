import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { RecipeSelectedEvent } from '../recipe-selected-event';
import { BaseComponent } from '../../shared/base-component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent extends BaseComponent implements OnInit {


  private _model: RecipeModel;

  private _recipeSelectedEventEmitter: EventEmitter< RecipeSelectedEvent >;


  constructor() {
    super();

    this._recipeSelectedEventEmitter = new EventEmitter<RecipeSelectedEvent>();
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


  @Output( 'recipeSelectedEvent' )
  get recipeSelectedEventEmitter(): EventEmitter< RecipeSelectedEvent > {

    return this._recipeSelectedEventEmitter;
  }


  public handleRecipeLinkClick(): void {

    this.recipeSelectedEventEmitter.emit( new RecipeSelectedEvent( this._model ) );
  }

}
