// import {Component} from "@angular/core";
// import {NavController} from 'ionic-angular';

// import {AddQuizQuestion} from '../addquizquestion/addQuizQuestion';
// @Component({
//   templateUrl: 'build/pages/addquiz/addquiz.html'
//   //providers: [QuizDetailService]
// })

// export class AddQuiz {
//   quizName: string;
//   noOfQuizQuestions: number;
//   constructor(private nav: NavController) {

//   }

//   myQuiz() {
//    // this.quizService.setQuizNames(this.quizName);

//     this.nav.push(AddQuizQuestion, {
//       quizName: this.quizName,
//       quizQuestion: this.noOfQuizQuestions
//     })
//   }
// }

import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuizDetailService} from '../../services/quizDetailService';
import {Dashboard} from '../dashboard/dashboard';

@Component({
    templateUrl: 'build/pages/addquiz/addquiz.html'
})

export class AddQuiz {
    
    quizName: string;
    noOfQuizQuestions: number;
    quizQuestion: string;
    options: any[] = [];
    optionsType: string;                                    //options array of each questions
    completeQuizQuestion = { quizName: this.quizName, question: this.quizQuestion, options: this.options, questionType: this.optionsType, rightAnswer: this.rightAnswer };                            //complete QuizQuestion object with question and options 
    optionNumber: number = 1;
    tabs: string = "Quiz Name"
    rightAnswer: string;
    constructor(private nav: NavController, private quizDetailService: QuizDetailService) {
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
        this.completeQuizQuestion = { quizName: this.quizName, question: this.quizQuestion, options: this.options, questionType: this.optionsType, rightAnswer: this.rightAnswer };
        this.quizDetailService.setQuizDetail(this.completeQuizQuestion);
        this.nav.push(Dashboard);
    }

}


// this.temp = this.quizDetailService.getQuizNames().then((dat) => {
//             console.log(dat);

//         });