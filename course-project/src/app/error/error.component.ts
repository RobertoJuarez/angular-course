import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {


  private _message: string;


  constructor( private route: ActivatedRoute) {}


  ngOnInit() {

    this.route.data.subscribe(
      data => this._message = data[ 'message' ]
    );
  }


  get message(): string {

    return this._message;
  }

}
