import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    `.modal{background: rgba(0,0,0, .5);`
  ]
})
export class AppComponent {

  signupform:FormGroup;
  loginform:FormGroup;

  constructor(private frmbuilder : FormBuilder, private signupService: SignupService)
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
      data =>
      console.log(data)
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
