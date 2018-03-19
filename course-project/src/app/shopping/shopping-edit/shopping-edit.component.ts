import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientAddedEvent } from '../ingredient-added-event';
import { BaseComponent } from '../../shared/base-component';
import { IngredientModel } from '../../shared/ingredient-model';
import { IngredientListClearedEvent } from '../ingredient-list-cleared-event';
import { IngredientDeletedEvent } from '../ingredient-deleted-event';
import { ShoppingService } from '../shopping.service';
import { Router } from '@angular/router';
import { AppRoutes } from '../../app-routes';
import { CanDeactivateComponent } from '../../shared/guards/can-deactivate-component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent extends BaseComponent implements OnInit, CanDeactivateComponent {

  @ViewChild( 'nameInput' )
  private nameInputRef: ElementRef;

  @ViewChild( 'amountInput' )
  private amountInputRef: ElementRef;

  private ingredientAdded: boolean;


  constructor( private shoppingService: ShoppingService,
               private router: Router ) {
    super();

    this.ingredientAdded = false;
  }


  ngOnInit() {
  }


  public handleAddButtonClick(): void {

    const ingredientName: string = this.nameInputRef.nativeElement.value;

    const ingredientAmount: number = this.amountInputRef.nativeElement.value;

    const ingredient: IngredientModel = new IngredientModel( ingredientName, ingredientAmount );

    const event: IngredientAddedEvent = new IngredientAddedEvent( ingredient );

    this.shoppingService.ingredientAddedEventEmitter.emit( event );

    this.ingredientAdded = true;

    this.router.navigate( [ AppRoutes.RECIPES ] );
  }


  public handleDeleteButtonClick(): void {

    const ingredientName: string = this.nameInputRef.nativeElement.value;

    const ingredientAmount: number = this.amountInputRef.nativeElement.value;

    const ingredient: IngredientModel = new IngredientModel( ingredientName, ingredientAmount );

    const event: IngredientDeletedEvent = new IngredientDeletedEvent( ingredient );

    this.shoppingService.ingredientDeletedEventEmitter.emit( event );
  }


  public handleClearButtonClick(): void {

    this.shoppingService.ingredientListClearedEventEmitter.emit( new IngredientListClearedEvent() );
  }


  public canDeactivate(): Observable< boolean> | Promise< boolean > | boolean {

    if( this.ingredientAdded ) {

      return true;
    }else {

      return confirm( 'Are you sure you want to leave without adding any ingredient?' );
    }
  }

}
