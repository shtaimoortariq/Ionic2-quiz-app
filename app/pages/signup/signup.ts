import { Component, OnInit } from '@angular/core';
import {Dashboard} from '../dashboard/dashboard';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/signup/signup.html'
})
export class SignUp {
    constructor(private nav: NavController) { }

    dashboard() {
        this.nav.push(Dashboard);
    }
}