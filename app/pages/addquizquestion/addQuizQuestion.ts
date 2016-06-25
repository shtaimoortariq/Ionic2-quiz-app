import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuizDetailService} from '../../services/quizDetailService';

@Component({
    templateUrl: 'build/pages/addquizquestion/addQuizQuestion.html'

})

export class AddQuizQuestion {
    quizName: any;
    constructor(private params: NavParams) {
        this.quizName = this.params.data.quizName;
        
     }
}