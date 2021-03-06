import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }


  //FIGURE OUT IF YOU WANT TO USE FETCH OR NOT
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      userDetails: null,
      projects: null
    }, httpOptions);
  }
}