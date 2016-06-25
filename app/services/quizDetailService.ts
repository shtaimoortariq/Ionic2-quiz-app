import { Injectable } from '@angular/core';

@Injectable()
export class QuizDetailService {
    quizNames: string[] = [];
    
    constructor() { }

    setQuizNames(quizName: string) {
        this.quizNames.push(quizName);
        console.log(this.quizNames);
    }

    getQuizNames() {
        return this.quizNames;
    }

}