import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit , OnDestroy
{
  subscription : Subscription;
  tweetinfo;
  //   Comments : 
  //   {
  //     CommentCounter: 2,
  //     Content : [
  //       "sss",
  //       "commenting."
  //     ],
  //     Username : [
  //       "Dist",
  //       "Dist"
  //     ],      
  //   },
  //   Content : "tweet time",
  //   CreatedAt: "2020-12-08T17:47:38.393Z",
  //   TweetNo: 5,
  //   Username: "DistortedEcho",
  //   like :
  //   {
  //     LikeCounter: 15,
  //     Username: [
  //       "Disted",
  //       "Disted",
  //       "Disted",
  //       "Disted",
  //       "Disted",
  //       "Disted"
  //     ]
  //   }
  // };
  constructor(private twtservice : TweetService) {}

  ngOnInit():void 
  {
      const x = Array.from(document.getElementsByClassName('center') as HTMLCollectionOf<HTMLElement>);
      x[0].style.display = "none";
      this.subscription = this.twtservice.tweetdetails
      .subscribe(
        (res: any) =>
        {
          this.tweetinfo = res;
          console.log(this.tweetinfo); 
        }
      );
  }
  ngOnDestroy(): void
  {
    if (this.subscription) 
    {
      this.subscription.unsubscribe();
    }
  }
}

