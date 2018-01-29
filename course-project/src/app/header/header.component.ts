import { Component } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent {


  constructor() {
    super();
  }

}
