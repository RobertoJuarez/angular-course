import { Observable } from 'rxjs/Observable';

export interface CanDeactivateComponent {

  canDeactivate: () => Observable< boolean> | Promise< boolean > | boolean;
}
