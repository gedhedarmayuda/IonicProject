import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  TxtUniversity: String = "";
  constructor() {}
  ShowUniversity(){
    this.TxtUniversity = "Neuva Ecija University of Science and Technology";
  }
}
