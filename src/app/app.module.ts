import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import{IftarmapPage} from '../pages/iftarmap/iftarmap';
import{BasketmapPage} from '../pages/basketmap/basketmap';
import{IftarplacemodifyPage} from '../pages/iftarplacemodify/iftarplacemodify';
import{GiftplacePage} from '../pages/giftplace/giftplace';
import{GiftplacemodifyPage} from '../pages/giftplacemodify/giftplacemodify';
import{IftarplacePage} from '../pages/iftarplace/iftarplace';
import{LoginPage} from '../pages/login/login';


import{RegisterPage} from '../pages/register/register';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ AngularFireModule} from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import { GiftServiceProvider } from '../providers/gift-service/gift-service';
import { IftarServiceProvider } from '../providers/iftar-service/iftar-service';
import{AngularFireAuth}from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
export const firebaseConfig = {
  apiKey: "AIzaSyDYJuHXqkoMPCO4jcLdn8JcHTrQp3taTqg",
  authDomain: "ramadan-1651a.firebaseapp.com",
  databaseURL: "https://ramadan-1651a.firebaseio.com",
  projectId: "ramadan-1651a",
  storageBucket: "",
  messagingSenderId: "1014254126131"
};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarmapPage,
BasketmapPage,
IftarplacemodifyPage,
GiftplacePage,
GiftplacemodifyPage,
IftarplacePage,
LoginPage,
RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarmapPage,
BasketmapPage,
IftarplacemodifyPage,
GiftplacePage,
GiftplacemodifyPage,
IftarplacePage,
LoginPage,
RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GiftServiceProvider,
    IftarServiceProvider,
    AngularFireAuth,
    AuthServiceProvider
  ]
})
export class AppModule {}
