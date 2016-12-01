import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Trending } from '../pages/trending/trending';
import { NewsPage } from '../pages/news-page/news-page';
import { Apiservice } from '../providers/apiservice';
@NgModule({
  declarations: [
    MyApp,
    Trending,NewsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Trending,NewsPage
  ],
  providers: [Apiservice]
})
export class AppModule {}
