import { Component } from '@angular/core';
import { Section } from './shared/section.enum';
import { BaseComponent } from './shared/base-component';
import { SelectedSectionEvent } from './shared/selected-section-event';
import { LogService } from './shared/services/log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent extends BaseComponent {

  private _currentSection: Section;


  constructor( private logService: LogService ) {
    super();
  }


  get currentSection(): Section {

    return this._currentSection;
  }


  set currentSection( value: Section ) {

    this._currentSection = value;
  }


  public handleSelectedSectionEvent( selectedSectionEvent: SelectedSectionEvent ) {

    this._currentSection = selectedSectionEvent.selectedSection;
  }

}
