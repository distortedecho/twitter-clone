import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit 
{
  subscription : Subscription;
  constructor(private twtservice : TweetService) {}

  ngOnInit():void 
  {
      const x = Array.from(document.getElementsByClassName('center') as HTMLCollectionOf<HTMLElement>);
      x[0].style.display = "none";
      this.twtservice.tweetdetails
      .subscribe(
        (res: any) =>
        {
          console.log(res.TweetNo); 
        }
      );
  }
}
