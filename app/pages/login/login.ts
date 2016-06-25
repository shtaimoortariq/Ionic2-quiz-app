import {Component} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
import {Dashboard} from '../dashboard/dashboard';
@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class Login {
  constructor(public nav: NavController) {

  }

  changeTheRoute() {
    this.nav.push(Dashboard);
  }

}
