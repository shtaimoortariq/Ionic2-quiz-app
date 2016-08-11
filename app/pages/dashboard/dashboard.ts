import {Component, Pipe} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';

import {AddQuiz} from '../addquiz/addquiz';
import {AddQuizQuestion} from '../addquizquestion/addquizquestion';
import {SignUp} from '../signup/signup';
import {TakeQuiz} from '../takequiz/takequiz';
import {Profile} from '../profile/profile';

import {QuizDetailService} from '../../providers/quizDetailService';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';


@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html',

})

export class Dashboard {

  quiz: FirebaseListObservable<any>;
  constructor(private nav: NavController, private quizService: QuizDetailService, af: AngularFire) {

   this.inIt();
  }

  inIt() {
    console.log('init');
    this.quiz = this.quizService.getQuizNames();
  }


  addQuizPage() {
    this.nav.push(AddQuiz);
  }

  signUpPage() {
    this.nav.push(SignUp);
  }

  takeQuizPage() {
    this.nav.push(TakeQuiz);
  }

  profilePage() {
    this.nav.push(Profile);
  }
}
