import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }
openGame(){
  this.navCtrl.push('GamePage');
}
openHome(){
  this.navCtrl.pop();
}
openProfile(){
  this.navCtrl.push('ProfilePage');
}
openChallenge(){
  this.navCtrl.push('ChallengePage');
}
openLeaderboard(){
  this.navCtrl.push('LeaderboardPage');
}
}
