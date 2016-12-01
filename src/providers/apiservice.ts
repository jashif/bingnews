import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { BingSearch } from '../models/models';
import 'rxjs/add/operator/map';

/*
  Generated class for the Apiservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Apiservice {
  headers: Headers = new Headers()

  TrendingUrl: string = 'https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics';
  SearchUrl:string='https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=';
  constructor(public http: Http) {
    console.log('Hello Apiservice Provider');
  }

  RequestInterceptor(): RequestOptions {
    const opts: RequestOptions = new RequestOptions()
    opts.headers = this.headers
    opts.headers.append('Ocp-Apim-Subscription-Key', "9dcc67a227224e7695b233ff6cacb5f6");

    return opts
  }
  //Loads trends from bing
  LoadTrends() {

    return new Promise<BingSearch>((resolve, reject) => {
      // We're using Angular Http provider to request the users,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the users and resolve the promise with the new data.
      this.http.get(this.TrendingUrl, this.RequestInterceptor())
        .map(res => <BingSearch>(res.json()))
        .subscribe(data => {
          // we've got back the raw users, now generate the core schedule users
          // and save the users for later reference

          resolve(data);
        }, (err) => { reject(err); });
    });
  }
    SearchNews(query) {

    return new Promise<BingSearch>((resolve, reject) => {
      // We're using Angular Http provider to request the users,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the users and resolve the promise with the new data.
      this.http.get(this.SearchUrl+query, this.RequestInterceptor())
        .map(res => <BingSearch>(res.json()))
        .subscribe(data => {
          // we've got back the raw users, now generate the core schedule users
          // and save the users for later reference

          resolve(data);
        }, (err) => { reject(err); });
    });
  }
}
