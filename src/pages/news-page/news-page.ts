import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Apiservice } from '../../providers/apiservice'
import { BingSearch, News } from '../../models/models'
/*
  Generated class for the NewsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news-page',
  templateUrl: 'news-page.html'
})
export class NewsPage {
  news: Array<News>;
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public api: Apiservice) { }

  ionViewDidLoad() {
    console.log('Hello Trending Page');

  }
  private open(url: string) {

    window.open(url);

  }
  getItems(ev: any) {
    let val = ev.target.value;
    this.news = [];
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.api.SearchNews(val).then(x => {
        x.value.forEach(element => {
          if (element.image != null && element.image.thumbnail != null) {

            element.imgurl = element.image.thumbnail.contentUrl;
          }
        });
        console.log(x.value);
        this.news = x.value;
      }).catch(ex => { });
    }
  }
}
