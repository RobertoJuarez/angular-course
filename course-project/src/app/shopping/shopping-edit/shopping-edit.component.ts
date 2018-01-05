import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor() { }


  ngOnInit() {
  }


  public handleAddButtonClick( nameInput: HTMLInputElement, amountInput: HTMLInputElement ): void {

    console.log( nameInput );
  }

}
