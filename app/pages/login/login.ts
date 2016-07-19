import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {Dashboard} from '../dashboard/dashboard';
import {SignUp} from '../signup/signup'
@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class Login {
  constructor(private nav: NavController) {

  }

  loginUser() {
    this.nav.push(Dashboard);
  }

 signUpUser() {
    this.nav.push(SignUp);
  }

}
