import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); // Check if user is logged in
  }

  getUserId(): string | null {
    return localStorage.getItem('userId'); // Retrieve user ID
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole'); // Retrieve user role
  }

  userLogin(user: any) : Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${user.username}&password=${user.password}`);
  }


}
