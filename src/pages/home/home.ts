import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import {DailyconsumptioninputPage} from '../dailyconsumptioninput/dailyconsumptioninput';
import {WelcomePage} from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDetails : any;
  responseData: any;

  constructor(public navCtrl: NavController,  public app: App) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
  }

  backToWelcome(){
    this.navCtrl.setRoot(WelcomePage);
 }
 
 logout(){
      localStorage.clear();
      setTimeout(() => this.backToWelcome(), 1000);
 }

 newComnsumption(){
  this.navCtrl.push(DailyconsumptioninputPage);
 }

}
