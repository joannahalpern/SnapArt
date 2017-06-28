import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyCRsLljI87jeVZ_hgsSyrP3nv_1Plyi_E8",
  authDomain: "moveez-tutorial.firebaseapp.com",
  databaseURL: "https://moveez-tutorial.firebaseio.com",
  projectId: "moveez-tutorial",
  storageBucket: "moveez-tutorial.appspot.com",
  messagingSenderId: "557573130734"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(firebaseConfig);
  }
}
