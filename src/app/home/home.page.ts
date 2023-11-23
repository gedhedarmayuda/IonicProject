import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Question1: string = "";
  remarks1: string = "";

  constructor() {}

  SeeAnswer1(){
    switch(this.Question1){
      case 'a':
        this.remarks1 = "Elephants are huge but not tallest";
        break;
      case 'b':
        this.remarks1 = "Hippo is huge but cannot reach tree";
        break;
      case 'c':
        this.remarks1 = "You got it right!";
        break;
      case 'd':
        this.remarks1 = "Zebra only reach grass and small tree";
        break;
      default:
        this.remarks1 = "";
    }
  }
}
