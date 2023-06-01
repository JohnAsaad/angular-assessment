import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signupUsers:any [] =  [];
signupObj: any = {
  userName: '',
  email: '',
  password: '',
  repassword: '',
  phone: ''
}
loginObj: any = {
  userName: '',
  password: '',
}

isAuthorized = false;

  constructor(private router:Router) { }
  ngOnInit() {
    this.registerOninit();
  }
  // login(uname:String,pword:string) {
  //   if (uname === 'john' && pword === '1234') {
  //     return 200;
  //   }
  //   else {
  //     return 403;
  //   }
  // }

  logout() {
    this.router.navigate(['login']);
  }

  registerService() {

    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
      repassword: '',
      phone: ''
    }
    this.isAuthorized = true;
    console.log(this.isAuthorized)
    // this.router.navigate(['home']);
    // console.log(this.registerForm.value)

  }
registerOninit() {
  const localData = localStorage.getItem('signUpUsers');
  if (localData != null) {
    this.signupUsers = JSON.parse(localData);
  }
}

loginService() {
  // debugger
  const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  if(isUserExist != undefined) {
    alert('User Login Successful')
    this.isAuthorized = true;
    this.router.navigate(['home'])
  } else {
    alert('Wrong Credentials')
  }
}
 
  
}
