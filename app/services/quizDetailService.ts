import { Injectable } from '@angular/core';

@Injectable()
export class QuizDetailService {
    quizNames: any[] = [];
    
    constructor() { 
        console.log("QuizDetailService");
    }

    setQuizDetail(newData: any) {
        this.quizNames.push(newData);
        console.log(this.quizNames);
            
    }

    getQuizNames() {
         return Promise.resolve(this.quizNames);
    }

}