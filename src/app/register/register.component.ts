import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

signupUsers1:any [] =  [];
signupObj1: any = {
  userName: '',
  email: '',
  password: '',
  repassword: '',
  phone: ''
}
loginObj1: any = {
  userName: '',
  password: '',
}

isAuth: boolean = false;




// name = "";
// email = "";
// repassword = "";
// phone = "";
// password = "";
errorMsg = "";

  registerForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    repassword: new FormControl(),
    phone: new FormControl ()
  })

constructor(private router: Router,private service: AuthService) {}

ngOnInit() {
  // this.service.registerOninit();
  this.signupUsers1 = this.service.signupUsers;
  this.signupObj1 = this.service.signupObj;
  this.loginObj1 = this.service.loginObj;
  // const localData = localStorage.getItem('signUpUsers');
  // if (localData != null) {
  //   this.signupUsers = JSON.parse(localData);
  // }
}

  onSubmit () {
    // this.registerData. = this.registerForm.value
    console.log(this.registerForm.value)
  }

  register() {
    this.service.registerService();
    // if (this.signupObj1.name.trim().length === 0) {
    //      this.errorMsg = "Name is required";
    //     } else if (this.signupObj1.password.trim().length === 0) {
    //       this.errorMsg = "Password is required";} 
    //       else if (this.signupObj1.password != this.signupObj1.repassword) {
    //         this.errorMsg = "Password is not matched"; }
    //         else if (this.signupObj1.phone.trim().length === 0) {
    //           this.errorMsg = "Please enter your phone number"; }
    //           else {
    //             this.errorMsg = ""
    //           }
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
    // this.isAuth = true;
    // this.signupUsers.push(this.signupObj);
    // localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    // this.signupObj = {
    //   userName: '',
    //   email: '',
    //   password: '',
    //   repassword: '',
    //   phone: ''
    // }
    this.router.navigate(['home']);
    console.log(this.registerForm.value)
    this.isAuth = true
    // console.log(this.isAuth)

  }

}

