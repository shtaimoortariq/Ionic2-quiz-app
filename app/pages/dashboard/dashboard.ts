import {Component} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
import {AddQuiz} from '../addquiz/addquiz';
import {AddQuizQuestion} from '../addquizquestion/addquizquestion'
import {QuizDetailService} from '../../services/quizDetailService';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html',
  providers: [QuizDetailService]
})

export class Dashboard {

  quiz: any[] = [];
  constructor(private nav: NavController, private quizDetailService: QuizDetailService) {
    this.inIt();
  }

  inIt() {
    this.quiz = this.quizDetailService.getQuizNames();
    console.log(this.quiz);
  }

  changeTheRoute() {
    console.log("changeTheRoute",AddQuizQuestion)
    this.nav.push(AddQuiz);
  }
}
