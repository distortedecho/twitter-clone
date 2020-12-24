import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  Url = 'https://twitter-apis.herokuapp.com/twitter/create';
  LoginUrl = 'https://twitter-apis.herokuapp.com/twitter/login';

  constructor(private http : HttpClient){}

  PostData(Data):Observable<any>
  {
    let httpheader = new HttpHeaders()
    .set('Content-Type','application/json');
    let options = {
      headers : httpheader
    };
      return this.http.post(this.Url,Data,options);
  }

  LoginData(Data):Observable<any>
  {
    let httpheader = new HttpHeaders()
    .set('Content-Type','application/json');
    let options = {
      headers : httpheader
    };
    return this.http.post(this.LoginUrl,Data,options);
  }
}
