import { IngredientModel } from '../shared/ingredient-model';
import { BaseEvent } from '../shared/base-event';

export class IngredientAddedEvent extends BaseEvent {


  private _ingredient: IngredientModel;


  constructor( ingredient: IngredientModel, event?: Event ) {

    super( event );

    this._ingredient = ingredient;
  }


  get ingredient(): IngredientModel {

    return this._ingredient;
  }
}
