import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private _addServerButtonDisabled: boolean;

  private _serverAdditionStatus: string;

  private _serverNameInput: string;


  constructor() {

    this._addServerButtonDisabled = true;

    this._serverAdditionStatus = 'No server added so far';
  }


  ngOnInit() {
  }


  get addServerButtonDisabled(): boolean {

    return this._addServerButtonDisabled;
  }


  set addServerButtonDisabled( value: boolean ) {

    this._addServerButtonDisabled = value;
  }


  get serverAdditionStatus(): string {

    return this._serverAdditionStatus;
  }

  set serverAdditionStatus( value: string ) {

    this._serverAdditionStatus = value;
  }


  get serverNameInput(): string {

    return this._serverNameInput;
  }


  set serverNameInput( value: string ) {

    this._serverNameInput = value;
  }


  public handleAddServerButtonClick() {

    this.serverAdditionStatus = `A new server was added. Server name is ${this.serverNameInput}`;
  }

}
