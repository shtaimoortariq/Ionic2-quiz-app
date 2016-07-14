import { Injectable } from '@angular/core';

@Injectable()
export class QuizDetailService {
    quizNames: any[] = [];
    
    constructor() { 
        console.log("QuizDetailService");
    }

    setQuizDetail(newData: any) {
        this.quizNames.push(newData);    
    }

    getQuizNames() {
         return new Promise((resolve, reject)=> {
            resolve(this.quizNames);
         })
    }

}