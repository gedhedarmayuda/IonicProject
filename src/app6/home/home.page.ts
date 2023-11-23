import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // txtGrade: number = 0;
  // remarks1: string = "";
  // remarks2: string = "";
  
  // txtUsername: string = "";
  // txtPassword: string = "";
  // remarks1: string = "";
  // remarks2: string = "";
  constructor() {}
  // lookGrade(){
  //   if(Number(this.txtGrade) <= 74){
  //     this.remarks1 = "Your grade means failed"
  //     this.remarks2 = "Sorry";
  //   }else{
  //     this.remarks1 = "Your grade means you are passed";
  //     this.remarks2 = "Congratulation";
  //   }
  // }

  // lookGrades(){
  //   if((this.txtUsername == "pedro") && (this.txtPassword == "penduko")){
  //     this.remarks1 = "Username name and password is correct";
  //     this.remarks2 = "Welcome";
  //   }else if((this.txtUsername == "pedro") && (this.txtPassword != "penduko")){
  //     this.remarks1 = "Username correct and password is not correct";
  //     this.remarks2 = "Access Denied";
  //   }else if((this.txtUsername != "pedro") && (this.txtPassword == "penduko")){
  //     this.remarks1 = "Username not correct and password is correct";
  //     this.remarks2 = "Access Denied";
  //   }else{
  //     this.remarks1 = "Login incorrect";
  //     this.remarks2 = "Access Denied";
  //   }
  // }
}
