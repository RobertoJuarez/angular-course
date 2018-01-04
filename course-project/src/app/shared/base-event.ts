export class BaseEvent {


  private _event: Event;


  constructor( event?: Event ) {

    this._event = event;
  }


  get event(): Event {

    return this._event;
  }

}
