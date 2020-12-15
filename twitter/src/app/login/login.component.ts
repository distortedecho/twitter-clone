import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signupform:FormGroup;
  loginform:FormGroup;

  constructor(private frmbuilder : FormBuilder, private signupService: SignupService, private router : Router)
  {
    this.signupform = frmbuilder.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      Username : ['', Validators.required], //validator.email for email
      Password : ['', Validators.required]
    });

    this.loginform = frmbuilder.group({
      Username : ['',Validators.required],
      Password : ['', Validators.required]
    });
  }

  PostData(signupform){
    let value = signupform.value;
    this.signup(value);
  }

  LoginData(loginform){
    let value = loginform.value;
    this.login(value);
  }

  signup(Data){
    this.signupService.PostData(Data)
    .subscribe(
      data =>
      console.log(data)
    );
  }

  login(Data){
  this.signupService.LoginData(Data)
    .subscribe(
      data =>{
        sessionStorage.setItem('key',data.token);
        if(sessionStorage.getItem('key')!=null)
        {
         this.router.navigate(['/Home']); 
        }
      }      
    ); 
  }

  display = "none";
  display2= "none";
  openModal()
  {
    this.display = "contents";
  }
  onCloseHandled()
  {
    this.display = "none";
  }

  openModal2()
  {
    this.display2 = "contents";
  }
  onCloseHandled2()
  {
    this.display2 = "none";
  }

}
