import { Component } from '@angular/core';
import { BaseComponent } from '../shared/base-component';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent extends BaseComponent {

  constructor() {
    super();
  }

}
