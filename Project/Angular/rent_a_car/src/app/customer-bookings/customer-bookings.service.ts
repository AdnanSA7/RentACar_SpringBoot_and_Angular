import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerBookingsService {

  apiUrl: string = 'http://localhost:8080/api/bookings';

  constructor(private http: HttpClient) { }

  getBookingsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

}
