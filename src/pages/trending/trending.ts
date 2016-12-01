import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Apiservice } from '../../providers/apiservice'
import {  News } from '../../models/models'
/*
  Generated class for the Trending page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trending',
  templateUrl: 'trending.html'
})
export class Trending {

  topics: Array<News>;

  constructor(public navCtrl: NavController, public api: Apiservice) { }

  ionViewDidLoad() {
    console.log('Hello Trending Page');
    this.api.LoadTrends().then(x => {
      this.topics = x.value;
    }).catch(ex => { });
  }

}
