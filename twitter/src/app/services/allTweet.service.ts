import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweets } from '../dto/allTweet/Tweets.dto';

const URL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //'Authorization': 'Bearer ' + token
    })
  };

@Injectable({
  providedIn: 'root'
})
export class AllTweetServiceService {

  constructor(private http: HttpClient) { }
  
  AllTweet():Observable<Tweets[]>{
    return this.http.get<Tweets[]>(URL,httpOptions);
  }
}
