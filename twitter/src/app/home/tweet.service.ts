import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  Url = "http://localhost:8080/twitter/showall";
  LikeUrl = "http://localhost:8080/twitter/like";
  CommentUrl = "http://localhost:8080/twitter/comment";
  SingleUser = "http://localhost:8080/twitter/singleUser";
  NotificationUrl = "http://localhost:8080/twitter/notification";
  ShowNotification = "http://localhost:8080/twitter/showNotif";
  UpdateNotification = "http://localhost:8080/twitter/updatenotif";

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

}
