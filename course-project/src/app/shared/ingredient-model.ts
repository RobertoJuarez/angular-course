

export class IngredientModel {

  private _id: string;

  private _name: string;

  private _amount: number;


  constructor( name: string, amount: number, id?: string ) {

    this._name = name;

    this._amount = amount;

    this._id = id;
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

  get amount(): number {
    return this._amount;
  }

  set amount( value: number ) {
    this._amount = value;
  }
}
