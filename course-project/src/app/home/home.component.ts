import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/base-component';
import { AppRoutes } from '../app-routes';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { SimpleObservable } from '../shared/simple-observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {


  private simpleObservableSubscription: Subscription;


  constructor( private router: Router, private authService: AuthService ) {
    super();
  }


  ngOnInit() {

    this.simpleObservableSubscription = new SimpleObservable().theObservable.subscribe(
      ( data: string ) => console.log( data),
      ( error: string ) => console.log( error ),
      () => console.log( 'simple observable completed !' )
    );
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
