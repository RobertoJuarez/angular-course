import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  private _addServerButtonDisabled: boolean;


  constructor() {

    this._addServerButtonDisabled = true;
  }


  ngOnInit() {
  }


  get addServerButtonDisabled(): boolean {

    return this._addServerButtonDisabled;
  }


  set addServerButtonDisabled( value: boolean ) {

    this._addServerButtonDisabled = value;
  }

}
