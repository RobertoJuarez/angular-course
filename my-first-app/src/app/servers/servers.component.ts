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

  private _serverAddedCondition: boolean;

  private _servers: string[];


  constructor() {

    this._addServerButtonDisabled = true;

    this._serverAdditionStatus = 'No server added so far';

    this._serverAddedCondition = false;

    this._servers = [];
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


  get serverAddedCondition(): boolean {
    return this._serverAddedCondition;
  }


  set serverAddedCondition( value: boolean ) {
    this._serverAddedCondition = value;
  }


  get servers(): string[] {
    return this._servers;
  }

  set servers( value: string[] ) {
    this._servers = value;
  }

  public handleAddServerButtonClick() {

    this._servers.push( this.serverNameInput );

    this.serverAdditionStatus = `A new server was added. Server name is ${this.serverNameInput}`;

    this.serverAddedCondition = true;
  }

}
