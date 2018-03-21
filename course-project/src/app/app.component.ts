import { Component } from '@angular/core';
import { BaseComponent } from './shared/base-component';
import { LogService } from './shared/services/log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LogService
  ]
})
export class AppComponent extends BaseComponent {


  constructor() {
    super();
  }

}
