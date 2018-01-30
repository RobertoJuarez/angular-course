
import { IngredientModel } from '../shared/ingredient-model';

export class RecipeModel {

  private _id: string;

  private _name: string;

  private _description: string;

  private _imagePath: string;

  private _ingredients: IngredientModel[];


  constructor( id: string,
               name: string,
               description: string,
               imagePath: string,
               ingredients: IngredientModel[] ) {

    this._id = id;

    this._name = name;

    this._description = description;

    this._imagePath = imagePath;

    this._ingredients = ingredients;
  }


  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name( value: string ) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description( value: string ) {
    this._description = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath( value: string ) {
    this._imagePath = value;
  }

  get ingredients(): IngredientModel[] {
    return this._ingredients;
  }

  set ingredients( value: IngredientModel[] ) {
    this._ingredients = value;
  }
}
