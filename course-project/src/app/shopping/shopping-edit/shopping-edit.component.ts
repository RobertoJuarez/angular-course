import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IngredientAddedEvent } from '../ingredient-added-event';
import { BaseComponent } from '../../shared/base-component';
import { IngredientModel } from '../../shared/ingredient-model';
import { IngredientListClearedEvent } from '../ingredient-list-cleared-event';
import { IngredientDeletedEvent } from '../ingredient-deleted-event';
import { ShoppingService } from '../shopping.service';


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


  constructor( private shoppingService: ShoppingService ) {
    super();
  }


  ngOnInit() {
  }


  public handleAddButtonClick(): void {

    const ingredientName: string = this.nameInputRef.nativeElement.value;

    const ingredientAmount: number = this.amountInputRef.nativeElement.value;

    const ingredient: IngredientModel = new IngredientModel( ingredientName, ingredientAmount );

    const event: IngredientAddedEvent = new IngredientAddedEvent( ingredient );

    this.shoppingService.ingredientAddedEventSubject.next( event );
  }


  public handleDeleteButtonClick(): void {

    const ingredientName: string = this.nameInputRef.nativeElement.value;

    const ingredientAmount: number = this.amountInputRef.nativeElement.value;

    const ingredient: IngredientModel = new IngredientModel( ingredientName, ingredientAmount );

    const event: IngredientDeletedEvent = new IngredientDeletedEvent( ingredient );

    this.shoppingService.ingredientDeletedEventSubject.next( event );
  }


  public handleClearButtonClick(): void {

    this.shoppingService.ingredientListClearedEventSubject.next( new IngredientListClearedEvent() );
  }


}
