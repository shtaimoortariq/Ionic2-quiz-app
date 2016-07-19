import {Component} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
import {AddQuiz} from '../addquiz/addquiz';
import {AddQuizQuestion} from '../addquizquestion/addquizquestion';
import {SignUp} from '../signup/signup';
import {QuizDetailService} from '../../services/quizDetailService';
import {TakeQuiz} from '../takequiz/takequiz';


@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html',
  
})

export class Dashboard {

  quiz: any[] = [];
  constructor(private nav: NavController, private quizDetailService: QuizDetailService) {
    this.inIt();
  }

  inIt() {
    this.quizDetailService.getQuizNames().then((newData:any) => {
      this.quiz = newData
    });
    
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
}
