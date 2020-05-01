import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(public authservice: AuthService, private alertify: AlertifyService, private router: Router ) { }

  ngOnInit() {

  }
  login() {
      console.log(this.model);
      this.authservice.login(this.model).subscribe(res => {
        this.alertify.success('logged in succesfully');
      }, error => {
        this.alertify.error(error);
      }, () =>{
        this.router.navigate(['/members']);
      });
  }

  loggedIn() {
    return this.authservice.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged Out');
    this.router.navigate(['/home']);
  }
}
