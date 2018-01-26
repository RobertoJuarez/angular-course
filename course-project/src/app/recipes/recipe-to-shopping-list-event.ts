import { RecipeModel } from './recipe-model';
import { BaseEvent } from '../shared/base-event';


export class RecipeToShoppingListEvent extends BaseEvent {


  private _recipe: RecipeModel;


  constructor( recipe: RecipeModel, event?: Event ) {

    super( event );

    this._recipe = recipe;
  }


  get recipe(): RecipeModel {

    return this._recipe;
  }


}
