import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/base-component';
import { AppRoutes } from '../app-routes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {


  constructor( private router: Router ) {
    super();
  }


  ngOnInit() {
  }


  public goToRecipes(): void {

    this.router.navigate( [ AppRoutes.RECIPES ] );
  }


  public goToShopping(): void {

    this.router.navigate( [ AppRoutes.SHOPPING ] );
  }

}
