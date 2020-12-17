import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,FormControl,NgForm } from '@angular/forms';
import { TweetService } from '../tweet.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  content:string="";
  reciever:string="";
  tweetno:Number;
  signupform:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private frmbuilder : FormBuilder, private tweet : TweetService) 
  {
    this.signupform = frmbuilder.group({
      Reciever : ['',Validators.required]
    });
  }  
  PostData(signupform,rec,tweetno)
  {
    let data = {
       content :signupform.value.Reciever,
       reciever : rec,
       tweetno : tweetno
    };
    this.Comment(data);
  }

  Comment(Data)
  {
    this.tweet.CommentTweet(Data)
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
