import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuizDetailService} from '../../services/quizDetailService';

@Component({
    templateUrl: 'build/pages/addquizquestion/addQuizQuestion.html'

})

export class AddQuizQuestion {
    quizName: string;
    quizQuestions: number;
    constructor(private params: NavParams) {
        this.quizName = this.params.data.quizName;
        this.quizQuestions = this.params.data.quizQuestion;
        console.log(this.quizName);
        console.log(this.quizQuestions);
     }
}