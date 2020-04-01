import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {
  }

  LogOut() {
    this.isAuthenticated = false;
    localStorage.clear();
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  getToken(email: string): string {
    return localStorage.getItem(email);
  }

  getUserByEmail(email: string, password: string): Observable<any> {
    const body = {email, password};
    return this.http.post(`http://localhost:4200/api/Registration/getuserForLogin`, body, {responseType: 'text'});
  }

  checkRegistr(email: string): Observable<any> {
    return this.http.get(`http://localhost:4200/api/Registration/forbiddenEmail?email=${email}`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post('http://localhost:4200/api/Registration/createuser', user, {responseType: 'text'});
  }

}
