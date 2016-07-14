import {Component} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
import {AddQuiz} from '../addquiz/addquiz';
import {AddQuizQuestion} from '../addquizquestion/addquizquestion'
import {QuizDetailService} from '../../services/quizDetailService';

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
      console.log(newData);
      this.quiz = newData
    });
    console.log(this.quiz);
  }

  changeTheRoute() {
    console.log("changeTheRoute",AddQuizQuestion)
    this.nav.push(AddQuiz);
  }
}
