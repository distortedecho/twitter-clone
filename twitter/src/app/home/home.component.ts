import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from './tweet.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

alltweets = [];
var:string ="";
reciever:string;
tweetno:Number;
signupform:FormGroup;
constructor(private tweets: TweetService, private route:Router, public modal: MatDialog, private frmbuilder : FormBuilder) {
  this.signupform = frmbuilder.group({
    Content : ['',Validators.required]
  })
}
PostData(signupform)
{
  let data =
  {
    Content :signupform.value.Content
  };
  this.tweet(data);
}
  tweet(data)
  {
    this.tweets.Post_tweet(data)
    .subscribe(
      data =>{
        console.log(data);
      }
    );
  }
  like(Username, Tweetno){
    let data = {
      reciever : Username,
      tweetno : Tweetno
    }
   this.tweets.LikeTweet(data)
   .subscribe(
     data =>{
       console.log(data);
     }
   );
    this.var = 'liked';
   this.notify(Username, this.var);
  }


  notify(Username, Variable)
  {
    let data = {
      Username : Username,
      details : " "+Variable+" "+'your tweet.'
    }
    this.tweets.Notification(data)
    .subscribe(
      data=>{
        console.log(data);
      }
    )
  }

  updateSubject(tweet)
  {
    let data = tweet;
    this.tweets.tweetdetails.next(data);
    this.route.navigate(['/Home/tweet/'+tweet.TweetNo]);
  }


  ngOnInit(): void {
    this.refreshData();
   setInterval(() => { 
        this.refreshData(); 
    }, 1000);
  }
  refreshData(){
    this.tweets.PostData()
    .subscribe(
      data => {
        this.alltweets = data.data;
      }
    );
  }
  ngOnDestroy(): void {

  }
  openModal(Reciever, Date, Content, tweetno)
  {
    this.modal.open(ModalComponent,{data:{Reciever:Reciever,Date:Date, Content:Content,tweetno:tweetno}});
  }
}
