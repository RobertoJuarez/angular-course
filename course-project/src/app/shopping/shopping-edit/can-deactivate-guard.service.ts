import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { CanDeactivateComponent } from '../../shared/guards/can-deactivate-component';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanDeactivateComponent> {

  constructor() { }

  canDeactivate( component: CanDeactivateComponent,
                 route: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot,
                 nextState?: RouterStateSnapshot): Observable< boolean> | Promise< boolean > | boolean {

    return component.canDeactivate();
  }

}
