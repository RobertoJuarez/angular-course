import { BaseEvent } from '../shared/base-event';
import { RecipeModel } from './recipe-model';


export class RecipeSelectedEvent extends BaseEvent {


  private _recipe: RecipeModel;


  constructor( recipe: RecipeModel, event?: Event ) {

    super( event );

    this._recipe = recipe;
  }


  get recipe(): RecipeModel {
    return this._recipe;
  }


}
