import { Component } from '@angular/core';
import { Section } from './shared/section.enum';
import { BaseComponent } from './shared/base-component';
import { SelectedSectionEvent } from './shared/selected-section-event';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  get someValue(): number {
    return this._someValue;
  }


  private _currentSection: Section;

  private _someValue: number;

  constructor() {
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
