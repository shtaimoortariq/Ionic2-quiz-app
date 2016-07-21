import { Component, OnInit } from '@angular/core';

import {NavController, MenuController} from 'ionic-angular';

import {AddQuiz} from '../addquiz/addquiz';
import {SignUp} from '../signup/signup';
import {TakeQuiz} from '../takequiz/takequiz';
import {Dashboard} from '../dashboard/dashboard';


@Component({
    templateUrl: 'build/pages/profile/profile.html'
})
export class Profile {
    constructor(private nav: NavController, private menu: MenuController) { }
 
}