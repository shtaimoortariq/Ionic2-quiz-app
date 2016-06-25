import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

import {AddQuizQuestion} from '../addquizquestion/addQuizQuestion';
@Component({
  templateUrl: 'build/pages/addquiz/addquiz.html'
  //providers: [QuizDetailService]
})

export class AddQuiz {
  quizName: string;
  noOfQuizQuestions: number;
  constructor(private nav: NavController) {
      
  }

  myQuiz() {
   // this.quizService.setQuizNames(this.quizName);
   console.log(this.noOfQuizQuestions);
   
    this.nav.push(AddQuizQuestion, {
      quizName: this.quizName
    })
  }
}
