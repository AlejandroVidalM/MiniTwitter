import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroDto } from '../dto/register/register.dto';
import { RequestRegister } from '../dto/register/request-register.dto';

const authURL = 'https://www.minitwitter.com:3001/apiv1/auth/signup';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
//    'Authorization': 'Bearer ' + token
    })
  };

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registro(registro: RegistroDto): Observable<RequestRegister> {
    return this.http.post<RequestRegister>(
      authURL,
      registro,
      httpOptions
    );
  }
}
