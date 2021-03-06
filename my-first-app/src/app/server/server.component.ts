import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {


  private _id: number;

  private _status: string;


  constructor() {

    this._id = 10;

    this._status = Math.random() > 0.5 ? 'online' : 'offline';
  }


  ngOnInit() {
  }


  public get id(): number {

    return this._id;
  }


  public get status(): string {

    return this._status;
  }


  public getBackgroundColor(): string {

    return this.status === 'online' ? 'green' : 'red';
  }
}
