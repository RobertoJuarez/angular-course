import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/base-component';
import { AppRoutes } from '../app-routes';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {


  constructor( private router: Router, private authService: AuthService ) {
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


  public handleLoginButtonClick(): void {

    this.authService.login();
  }


  public handleLogoutButtonClick(): void {

    this.authService.logout();
  }

}
