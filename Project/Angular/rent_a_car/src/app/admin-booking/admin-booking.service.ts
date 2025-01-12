import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  private apiUrl = 'http://localhost:8080/api/bookings'; // Your backend API endpoint

  constructor(private http: HttpClient) { }

  // updateBookingStatus(bookingId: number, status: any) {
  //   return this.http.patch<any>(`${this.apiUrl}/${bookingId}/status?status=${status}`, {});
  // }

  // updateBookingStatus(bookingId: number, status: string): Observable<any> {
  //   const url = `http://localhost:8080/api/bookings/${bookingId}/status`; // Ensure this matches your backend endpoint
  //   const params = new HttpParams().set('status', status); // Send status as a query parameter
  
  //   return this.http.patch<any>(url, { params });
  // }
  
  // updateBookingStatus(bookingId: number, status: string): Observable<any> {  
  //   return this.http.put<any>(`http://localhost:8080/api/bookings/${bookingId}/status?status=${status}`, {}, {responseType: 'json'});  // Make the PATCH request with query params
  // }
  
  updateBookingStatus(bookingId: number, status: string): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/api/bookings/${bookingId}/status?status=${status}`, 
      {},  // Empty body since the status is passed in the query string
      { responseType: 'json' }
    ).pipe(
      catchError((error) => {
        console.error('Error updating booking status:', error);
        return throwError(error);  // Propagate error to be handled by component
      })
    );
  }
  

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


}
