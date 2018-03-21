import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { ShoppingService } from '../../shopping/shopping.service';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { RecipeDetailResolverService } from './recipe-detail-resolver.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {


  private _model: RecipeModel;

  private dataSubscription: Subscription;


  constructor( private shoppingService: ShoppingService,
               private activatedRoute: ActivatedRoute ) { }


  ngOnInit() {

    this.dataSubscription = this.activatedRoute.data.subscribe(
      ( data: Data ) => { this._model = data[ 'detail' ]; }
    );
  }


  ngOnDestroy() {

    this.dataSubscription.unsubscribe();
  }


  get model(): RecipeModel {
    return this._model;
  }


  set model( value: RecipeModel ) {
    this._model = value;
  }


  public handleClickOnToShoppingListLink(): void {

    for ( const ingredient of this._model.ingredients ) {

      this.shoppingService.addIngredient( ingredient );
    }
  }

}
