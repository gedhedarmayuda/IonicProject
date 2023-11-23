import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  FirstNumber: number = 0;
  SecondNumber: number = 0;
  ThirdNumber: number = 0;
  Ans: number = 0;
  constructor() {}
  MySum(){
    this.Ans = Number(this.FirstNumber) + Number(this.SecondNumber) + Number(this.ThirdNumber);
  }
  Reset(){
    this.FirstNumber = 0;
    this.SecondNumber = 0;
    this.ThirdNumber = 0;
    this.Ans = 0;
  }
}
