import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweets } from '../dto/allTweet/Tweets.dto';

var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var token = currentUser.token;
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
  })
}
@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  darMeGusta(id):Observable<Tweets>{
    const URL="https://www.minitwitter.com:3001/apiv1/tweets/like/"+id;
    return this.http.post<Tweets>(URL,null,httpOptions);
  }
}