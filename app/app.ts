import { Component, ViewChild } from '@angular/core';

import { Events, ionicBootstrap, MenuController, Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';


import {Login} from './pages/login/login';
import {QuizDetailService} from './providers/quizDetailService';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'build/app.html'
})
class QuizApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;

    constructor(
    platform: Platform
    
  ) {
    // Call any initial plugins when ready
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

}


};


ionicBootstrap(QuizApp, [

  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyCpy3zin1OWfPyFNL_dUwDFwxuMCumUKqw',
    authDomain: 'helloworld-797b6.firebaseapp.com',
    databaseURL: 'https://helloworld-797b6.firebaseio.com',
    storageBucket: 'helloworld-797b6.appspot.com',
  }),

  QuizDetailService

], { });


