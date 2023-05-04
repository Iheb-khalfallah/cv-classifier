import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  errorMessage='Invalid Credentialsa';
  RegisterSuccess=false;
  successMessage: string | undefined;
  invalidLogin= false;
  loginSuccess=false;
  isUserSide:boolean=false;
  isadminSide:boolean=false;

  constructor (private registrationService:ComponentService , private router: Router ){}
  title = 'project';
  reg_email:string="";
  reg_password:string='';
  log_email:string="";
  log_password:string='';
  reg_confirm_password:string='';
  reg_first_name:string='';
  reg_last_name:string='';
  reg_user_name:string='';
  register(){

    const registrationData = {
      firstName: this.reg_first_name,
      lastName: this.reg_last_name,
      email: this.reg_email,
      password: this.reg_password,
    };
    this.registrationService.registerUser(registrationData).subscribe(response => {
      console.log(response); 
      this.RegisterSuccess = true;
      this.isUserSide=false;
    }, error => {
      console.error(error);
      this.RegisterSuccess = false;

    });
  

  };
  login() {
    var email = this.log_email;
    var password = this.log_password;
    this.registrationService.loginUser(email, password).subscribe((res) => {
      console.log(email);
      console.log(password);
      this.isadminSide=true;
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful'
      console.log(this.successMessage);
    }, error => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.errorMessage = 'Invalid Credentials';
      console.log(error);
    });
  }
  normaluser(){
    this.isUserSide=true;    
  }
}
