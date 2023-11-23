import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  t2: number = 0;
  a: number = 0;
  g: number = 0;
  m1: number = 0;
  m2: number = 0;

  constructor() {}
  keplerThird(){
    this.t2 = (4*Math.pow(Math.PI, 2)/this.g*(this.m1+this.m2))*Math.pow(this.a, 3)
  }
  reset(){
    this.a = 0;
    this.g = 0;
    this.m1 = 0;
    this.m2 = 0;
    this.t2 = 0;
  }
}
