import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import { BaseComponent } from '../../shared/base-component';
import { Router } from '@angular/router';
import { AppRoutes } from '../../app-routes';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent extends BaseComponent implements OnInit {


  private _model: RecipeModel;


  constructor( private router: Router ) {
    super();
  }


  ngOnInit() {
  }


  @Input()
  get model(): RecipeModel {
    return this._model;
  }


  set model( value: RecipeModel ) {
    this._model = value;
  }


  public handleRecipeLinkClick(): void {

    this.router.navigate( [ AppRoutes.RECIPES + '/' + this._model.id ]  );
  }

}
