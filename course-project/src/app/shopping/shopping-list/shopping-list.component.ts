import { Component, OnDestroy, OnInit } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient-model';
import { BaseComponent } from '../../shared/base-component';
import { ShoppingService } from '../shopping.service';
import { IngredientDeletedEvent } from '../ingredient-deleted-event';
import { IngredientListClearedEvent } from '../ingredient-list-cleared-event';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent extends BaseComponent implements OnInit, OnDestroy {


  private _ingredients: IngredientModel[];

  private ingredientListClearedEventSubscription: Subscription;


  constructor( private shoppingService: ShoppingService ) {
    super();

    this._ingredients = [];
  }


  ngOnInit() {

    this.ingredientListClearedEventSubscription =
      this.shoppingService.ingredientListClearedEventSubject.subscribe( event => this.handleIngredientListClearedEvent( event ) );

    this.shoppingService.ingredients.subscribe(( theIngredients: IngredientModel[] ) => {
      this._ingredients = theIngredients;
    });
  }


  ngOnDestroy() {

    this.ingredientListClearedEventSubscription.unsubscribe();
  }


  get ingredients(): IngredientModel[] {

    return this._ingredients.slice();
  }


  public handleDeleteButtonClick( ingredient: IngredientModel ): void {

    this.shoppingService.deleteIngredient( ingredient ).subscribe(
      response => {
        let ingredientIndex = -1;

        for( let k = 0; k < this._ingredients.length; k++ ) {

          if( this._ingredients[ k ].id === ingredient.id ) {

            ingredientIndex = k;

            break;
          }
        }

        if( ingredientIndex > -1 ) {

          this._ingredients.splice( ingredientIndex, 1 );
        }
      },
      error => console.log( error )
    );
  }


  private handleIngredientListClearedEvent( event: IngredientListClearedEvent ): void {

    this.shoppingService.clearIngredients().subscribe(
      response => this._ingredients = [],
      error => console.log( error )
    );
  }

}
