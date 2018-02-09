import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {


  private _loggedIn: boolean;


  constructor() {

    this._loggedIn = false;
  }


  get loggedIn(): boolean {

    return this._loggedIn;
  }


  set loggedIn( value: boolean ) {

    this._loggedIn = value;
  }


  public login() {

    this._loggedIn = true;
  }


  public logout() {

    this._loggedIn = false;
  }


  public isAuthenticated(): Promise< boolean > {

    return new Promise(
      resolve => {
        setTimeout( () => resolve( this.loggedIn ), 1000 );
      }
    );
  }

}
