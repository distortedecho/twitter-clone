import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  Url = "http://localhost:8080/twitter/showall";
  LikeUrl = "http://localhost:8080/twitter/like";
  CommentUrl = "http://localhost:8080/twitter/comment";

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
    return this.Http.get(this.Url,options);;
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

}
