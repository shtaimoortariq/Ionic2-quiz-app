import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {QuizDetailService} from '../../services/quizDetailService';

@Component({
    templateUrl: 'build/pages/addquizquestion/addquizquestion.html'
})

export class AddQuizQuestion {
    quizName           : string;
    noOfQuizQuestions  : number;                                                               
    quizQuestion       : string;                                                                            
    options: any[]     = [];  
    optionsType        : string;                                    //options array of each questions
    completeQuizQuestion = {question: this.quizQuestion, options: this.options, questionType: this.optionsType};                            //complete QuizQuestion object with question and options 
    optionNumber        : number = 1;


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
        this.optionNumber++;     
     }
    
    submitQuizQuestion() {
        this.completeQuizQuestion = {question: this.quizQuestion, options: this.options, questionType: this.optionsType};
        console.log(this.completeQuizQuestion);
    }

}
