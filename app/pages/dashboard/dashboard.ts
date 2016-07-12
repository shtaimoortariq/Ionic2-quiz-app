import {Component} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
import {AddQuiz} from '../addquiz/addquiz';
import {AddQuizQuestion} from '../addquizquestion/addquizquestion'

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})

export class Dashboard {
  constructor(public nav: NavController) {
    
  }

  changeTheRoute() {
    this.nav.push(AddQuizQuestion);

  }

}
