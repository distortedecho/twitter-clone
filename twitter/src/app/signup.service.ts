import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  Url = 'http://localhost:8080/twitter/create';
  LoginUrl = 'http://localhost:8080/twitter/login';

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
