import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the DailyconsumptioninputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dailyconsumptioninput',
  templateUrl: 'dailyconsumptioninput.html',
})
export class DailyconsumptioninputPage {
  data = {datetime: "", food: "", mindState: "", foodTypes: ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyconsumptioninputPage');
  }

  saveConsumption(){
    // TODO: Save Consumption
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
