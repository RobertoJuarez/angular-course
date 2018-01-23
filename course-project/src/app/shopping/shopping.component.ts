import { Component } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent extends BaseComponent {


  constructor() {
    super();
  }

}
