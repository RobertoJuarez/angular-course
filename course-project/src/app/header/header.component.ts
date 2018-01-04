import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectedSectionEvent } from '../shared/selected-section-event';
import { Section } from '../shared/section.enum';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {


  private _selectedSectionEventEmitter: EventEmitter< SelectedSectionEvent >;


  constructor() {
    super();

    this._selectedSectionEventEmitter = new EventEmitter< SelectedSectionEvent >();
  }


  ngOnInit() {
  }


  @Output( 'selectedSectionEvent' )
  get selectedSectionEventEmitter(): EventEmitter< SelectedSectionEvent > {

    return this._selectedSectionEventEmitter;
  }


  public handleSectionLinkClick( selectedSection: Section ): void {

    this.selectedSectionEventEmitter.emit( new SelectedSectionEvent( selectedSection ) );
  }

}
