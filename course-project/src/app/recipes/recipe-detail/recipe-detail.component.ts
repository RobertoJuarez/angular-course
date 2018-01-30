import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { ShoppingService } from '../../shopping/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {


  private _model: RecipeModel;

  private paramsSubscription: Subscription;


  constructor( private shoppingService: ShoppingService,
               private recipeService: RecipeService,
               private activatedRoute: ActivatedRoute ) { }


  ngOnInit() {

    this._model = this.recipeService.getRecipeById( this.activatedRoute.snapshot.params[ 'id' ] );

    this.paramsSubscription = this.activatedRoute.params.subscribe(
      ( params: Params ) => {  this._model = this.recipeService.getRecipeById( params[ 'id' ] ); }
    );
  }


  ngOnDestroy() {

    this.paramsSubscription.unsubscribe();
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
