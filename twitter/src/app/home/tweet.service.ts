import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  Url = "https://twitter-apis.herokuapp.com/twitter/showall";
  sendtweet = "https://twitter-apis.herokuapp.com/twitter/tweet";
  LikeUrl = "https://twitter-apis.herokuapp.com/twitter/like";
  CommentUrl = "https://twitter-apis.herokuapp.com/twitter/comment";
  SingleUser = "https://twitter-apis.herokuapp.com/twitter/singleUser";
  NotificationUrl = "https://twitter-apis.herokuapp.com/twitter/notification";
  ShowNotification = "https://twitter-apis.herokuapp.com/twitter/showNotif";
  UpdateNotification = "https://twitter-apis.herokuapp.com/twitter/updatenotif";

  tweetdetails = new BehaviorSubject<any>(null);

  constructor(private Http: HttpClient) { }
  
  PostData():Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer' +" " +sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.get(this.Url,options);
  }

  GetSingle():Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer' +" " +sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.get(this.SingleUser,options);
  }

  LikeTweet(Data):Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer' +" " +sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.post(this.LikeUrl,Data,options);
  }

  CommentTweet(Data):Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer' +" " +sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.post(this.CommentUrl,Data,options);
  }

  Notification(Data):Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer' +" " +sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.post(this.NotificationUrl,Data,options);
  }

  ShowNotif():Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer' +" " +sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.get(this.ShowNotification,options);
  }

  UpdateNotif(data):Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer' +" " +sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.post(this.UpdateNotification,data,options);
  }


  Post_tweet(data):Observable<any>
  {
    let httpheader = new HttpHeaders({
      'Content-type' : 'Application/json',
      'Authorization' : 'Bearer'+" "+sessionStorage.getItem('key')
    });
    let options = {
      headers : httpheader,
    };
    return this.Http.post(this.sendtweet,data,options);
  }

}
