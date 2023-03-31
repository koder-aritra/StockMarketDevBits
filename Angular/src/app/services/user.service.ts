import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {UserLogin} from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private getUsersUrl = 'http://localhost:8080/api/users';
  private loginUrl = 'http://localhost:8080/api/login';
  private registerUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  login(user: UserLogin): Observable<User> {
    return this.http.post<User>(`${this.loginUrl}/${user.username}/${user.password}`, {headers: this.httpHeaders});
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user, {headers: this.httpHeaders});
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.registerUrl, user, {headers: this.httpHeaders});
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl, {headers: this.httpHeaders})
  }
}
