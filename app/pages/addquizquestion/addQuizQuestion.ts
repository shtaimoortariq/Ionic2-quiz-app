import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuizDetailService} from '../../services/quizDetailService';

@Component({
    templateUrl: 'build/pages/addquizquestion/addquizquestion.html'
})

export class AddQuizQuestion {
    quizName           : string;
    noOfQuizQuestions  : number;
    quizQuestion       : string;
    options: any[]     = [];
    

    constructor(private params: NavParams) {
        this.quizName = this.params.data.quizName;
        this.noOfQuizQuestions = this.params.data.quizQuestion;
        this.options.push({
            option: null
        });
     }

     addQuizQuestions() {
          this.options.push({
            option: null
        });         
     }
    
    submitQuizQuestion() {
        console.log(this.options);
    }

}