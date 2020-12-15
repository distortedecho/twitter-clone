import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  Url = "http://localhost:8080/twitter/showall";
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
}
