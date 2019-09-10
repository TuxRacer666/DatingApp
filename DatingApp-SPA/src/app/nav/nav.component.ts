import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model: any = {};
  userName: string;

  constructor(public authService: AuthService,
              private alterifyService: AlertifyService ) {
  }

  ngOnInit() {
   /* if (this.authService.decodedToken) {
      this.userName = this.authService.decodedToken.unique_name;
    } else {
      this.userName = '';
    }*/
  }

  login() {
    this.authService.login(this.model).subscribe( next => {
      this.alterifyService.success('Logged in successFully');
    }, error => {
      this.alterifyService.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alterifyService.message('logged out');
  }

}
