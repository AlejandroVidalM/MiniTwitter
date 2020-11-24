import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../dto/login.interface';
import { LoginResponse } from '../model/interface/logins-response.interface';

const authURL = 'https://www.minitwitter.com:3001/apiv1/auth/post_auth_login';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
//    'Authorization': 'Bearer ' + token
    })
  };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      authURL,
      loginDto,
      httpOptions
    );
  }
}
