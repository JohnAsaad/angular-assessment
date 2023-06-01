import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signupUsers2:any [] =  [];
  signupObj2: any = {
    userName: '',
    email: '',
    password: '',
    repassword: '',
    phone: ''
  }
  loginObj2: any = {
    userName: '',
    password: '',
  }
  // username = "";
  // password = "";
  // errorMsg = "";
constructor(private auth:AuthService, private router: Router) {}


ngOnInit() {
  // this.auth.loginService();
  this.signupUsers2 = this.auth.signupUsers;
  this.signupObj2 = this.auth.signupObj;
  this.loginObj2 = this.auth.loginObj;
  let isAuth = this.auth.isAuthorized;
  
  // const localData = localStorage.getItem('signUpUsers');
  // if (localData != null) {
  //   this.signupUsers = JSON.parse(localData);
  // }
}

  // login() {
  //   if (this.username.trim().length === 0) {
  //     this.errorMsg = "Username is required";
  //   } else if (this.password.trim().length === 0) {
  //     this.errorMsg = "Password is required";
  //   }
  //   else {
  //     this.errorMsg = "";
  //     let res = this.auth.login(this.username,this.password)
  //     if (res === 200) {
  //       this.router.navigate(['home'])
  //     }
  //     if (res === 403) {
  //       this.errorMsg = "Invalid Credentials"
  //     }
  //   }
  // }

  login() {
    this.auth.loginService();
  }

 

}

