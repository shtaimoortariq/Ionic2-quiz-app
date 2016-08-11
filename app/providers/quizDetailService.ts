import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

@Injectable()

export class QuizDetailService {
    quizNames: any[] = [];

    quiz: FirebaseListObservable<any>;
    constructor(af: AngularFire) {
        this.quiz = af.database.list('/quiz');
        console.log(this.quiz);
    }

    setQuizDetail(newData: any) {
        this.quiz.push(newData);
    }

    getQuizNames() {
        this.quiz.subscribe(snapshots => {
            console.log('sanpshot', snapshots);
        });

        return this.quiz;

    }

}