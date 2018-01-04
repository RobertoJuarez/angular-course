
import { Section } from './section.enum';
import { BaseEvent } from './base-event';


export class SelectedSectionEvent extends BaseEvent {


  private _selectedSection: Section;


  constructor( selectedSection: Section, event?: Event ) {

    super( event );

    this._selectedSection = selectedSection;
  }


  get selectedSection(): Section {

    return this._selectedSection;
  }

}
