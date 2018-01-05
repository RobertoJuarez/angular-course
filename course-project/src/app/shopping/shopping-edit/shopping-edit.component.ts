import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientAddedEvent } from '../ingredient-added-event';
import { BaseComponent } from '../../shared/base-component';
import { IngredientModel } from '../../shared/ingredient-model';
import { IngredientListClearedEvent } from '../ingredient-list-cleared-event';
import { IngredientDeletedEvent } from '../ingredient-deleted-event';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent extends BaseComponent implements OnInit {

  @ViewChild( 'nameInput' )
  private nameInputRef: ElementRef;

  @ViewChild( 'amountInput' )
  private amountInputRef: ElementRef;

  private _ingredientAddedEventEmitter: EventEmitter< IngredientAddedEvent >;

  private _ingredientDeletedEventEmitter: EventEmitter< IngredientDeletedEvent >;

  private _ingredientListClearedEventEmitter: EventEmitter< IngredientListClearedEvent >;


  constructor() {

    super();

    this._ingredientAddedEventEmitter = new EventEmitter< IngredientAddedEvent >();

    this._ingredientDeletedEventEmitter = new EventEmitter< IngredientDeletedEvent >();

    this._ingredientListClearedEventEmitter = new EventEmitter< IngredientListClearedEvent >();
  }


  ngOnInit() {
  }


  @Output( 'ingredientAddedEvent' )
  get ingredientAddedEventEmitter(): EventEmitter<IngredientAddedEvent> {

    return this._ingredientAddedEventEmitter;
  }


  @Output( 'ingredientDeletedEvent' )
  get ingredientDeletedEventEmitter(): EventEmitter<IngredientDeletedEvent> {

    return this._ingredientDeletedEventEmitter;
  }


  @Output( 'ingredientListClearedEventEmitter' )
  get ingredientListClearedEventEmitter(): EventEmitter<IngredientListClearedEvent> {

    return this._ingredientListClearedEventEmitter;
  }


  public handleAddButtonClick(): void {

    const ingredientName: string = this.nameInputRef.nativeElement.value;

    const ingredientAmount: number = this.amountInputRef.nativeElement.value;

    const ingredient: IngredientModel = new IngredientModel( ingredientName, ingredientAmount );

    const event: IngredientAddedEvent = new IngredientAddedEvent( ingredient );

    this._ingredientAddedEventEmitter.emit( event );
  }


  public handleDeleteButtonClick(): void {

    const ingredientName: string = this.nameInputRef.nativeElement.value;

    const ingredientAmount: number = this.amountInputRef.nativeElement.value;

    const ingredient: IngredientModel = new IngredientModel( ingredientName, ingredientAmount );

    const event: IngredientDeletedEvent = new IngredientDeletedEvent( ingredient );

    this._ingredientDeletedEventEmitter.emit( event );
  }


  public handleClearButtonClick(): void {

    this._ingredientListClearedEventEmitter.emit( new IngredientListClearedEvent() );
  }


}
