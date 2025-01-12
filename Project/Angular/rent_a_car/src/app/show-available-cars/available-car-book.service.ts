import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableCarBookService {

  private apiUrl = 'http://localhost:8080/api/bookings'; // Your backend API endpoint
  private apiUrl1 = 'http://localhost:8080/api/additionalServices'; // Your backend API endpoint
  

  constructor(private http: HttpClient) { }

  bookCar(bookingRequest: any): Observable<any> {
    return this.http.post(this.apiUrl, bookingRequest);
  }

  getAdditionalService(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl1);
  }
  
}
