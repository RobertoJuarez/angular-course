import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


export class SimpleObservable {


  private _theObservable: Observable< string >;


  constructor() {

    this._theObservable = this.createTheObservable();
  }


  private createTheObservable(): Observable< string > {

    return Observable.create( ( observer: Observer< string > ) => {

        setTimeout(  () => { observer.next( 'first data pack' ); }, 2000 );

        setTimeout(  () => { observer.next( 'second data pack' ); }, 4000 );

        setTimeout(  () => { observer.error( 'this is the error gee' ); }, 5000 );
     });
  }


  public get theObservable(): Observable< string > {

    return this._theObservable;
  }

}
