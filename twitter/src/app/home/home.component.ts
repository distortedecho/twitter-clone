import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from './tweet.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

alltweets = [];
reciever:string;
tweetno:Number;
constructor(private tweets: TweetService, private route:Router, public modal: MatDialog) {}
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
  openModal(Reciever, Date, Content, tweetno)
  {
    this.modal.open(ModalComponent,{data:{Reciever:Reciever,Date:Date, Content:Content,tweetno:tweetno}});
  }
}
