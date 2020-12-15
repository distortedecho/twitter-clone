import { Component, OnInit } from '@angular/core';
import { TweetService } from './tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

alltweets = [];
constructor(private tweets: TweetService) 
{
    this.tweets.PostData()
    .subscribe(
      data => {
        this.alltweets = data.data;
        console.log(this.alltweets);
      }
    );
}

  ngOnInit(): void {
  }

}
