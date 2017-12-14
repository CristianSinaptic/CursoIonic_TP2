import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginUserData = { "username": "","password": "" };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.loginUserData.username.toUpperCase() === "DEMO" && this.loginUserData.password.toUpperCase() === "DEMO"){
      
      let userData = {"name": "DEMO","lastname": "TEST","dni ": "11111111", "username": "DEMO","password": "DEMO", "repassword": "DEMO" };
      localStorage.setItem('userData', JSON.stringify(userData));
      this.navCtrl.setRoot(HomePage, {}, {animate: false});
    }
    else{
      this.showError();
    }
  }

  showError() {
    let alert = this.alertCtrl.create({
      title: 'Error en las credenciales',
      subTitle: 'El usuario y/o contraseña ingresado no es correcto',
      buttons: ['OK']
    });
    alert.present();
  }

  signup(){
    //Login page link
    this.navCtrl.push(SignupPage);
  }


}
