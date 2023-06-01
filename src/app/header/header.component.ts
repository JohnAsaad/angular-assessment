import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private router: Router,private service:AuthService) {}

  isAuth:boolean = false;
  isAuth1:boolean = true;

  ngOnInit () {
    // console.log(this.isAuth)
    this.isAuth = this.service.isAuthorized
  }

  goToLogin () {
    this.router.navigate(['login']);
    this.isAuth1= false
  }

  goToHome () {
    this.router.navigate(['home']);
  }
  goToRegister () {
    this.router.navigate(['register']);
    this.isAuth1= false
  }

  Logout() {
    this.isAuth = false;
  }
 }
