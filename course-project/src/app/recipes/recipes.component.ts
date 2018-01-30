import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent extends BaseComponent {

  constructor() {
    super();
  }

}
