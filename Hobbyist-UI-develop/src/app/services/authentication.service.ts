import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public isAuthenticated = false;
  public isAuthenticatedSubject = new BehaviorSubject(false);
  private currentUser: UserModel = {};

  constructor(private router: Router, private http: HttpClient) {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
      this.isAuthenticated = true;
      this.isAuthenticatedSubject.next(true);
    } else this.currentUser = {};
  }

  getAuthenicationStatus() {
    return this.isAuthenticatedSubject;
  }

  updateCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    } else this.currentUser = {};
  }

  getCurrentUser() {
    return this.currentUser;
  }

  login(credentials: any): any {
    this.isAuthenticated = false;
    return this.http.get(
      `${environment.apiEndpoint}/users/authenticate/${credentials.email}/${credentials.password}`
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.isAuthenticatedSubject.next(this.isAuthenticated);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    return {
      message: 'User logout successfull!!!',
      is_authenticated: this.isAuthenticated,
    };
  }
}
