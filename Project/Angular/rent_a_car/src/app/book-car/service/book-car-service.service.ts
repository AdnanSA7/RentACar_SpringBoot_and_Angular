import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCarServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/api/rentType";
  private apiUrl = 'http://localhost:8080/api/car/available';

  private availableCars: any[] = []; // Store cars temporarily

  getAllCar(): Observable<any>{
    return this.http.get(this.baseUrl);
  }


  // Fetch available cars from the backend
  // fetchAvailableCars(rentalTypeName: string, categoryName: string, startDate: Date): Observable<any[]> {
  //   const formattedDate = encodeURIComponent(startDate.toISOString()); // Format date to ISO format
  //   const url = `${this.apiUrl}?rentalTypeName=${rentalTypeName}&categoryName=${categoryName}&startDate=${formattedDate}`;
  //   return this.http.get<any[]>(url);
  // }

  fetchAvailableCars(rentalTypeName: string, categoryName: string, startDate: Date): Observable<any> {
    const formattedDate = encodeURIComponent(startDate.toISOString()); // Format date to ISO format
    const params = `?rentalTypeName=${encodeURIComponent(rentalTypeName)}&categoryName=${encodeURIComponent(categoryName)}&startDate=${formattedDate}`;
    return this.http.get<any>(`${this.apiUrl}${params}`);
  }

  // Save cars locally
  setAvailableCars(cars: any[]) {
    this.availableCars = cars;
  }

  // Retrieve stored cars
  getAvailableCars(): any[] {
    return this.availableCars;
  }


  private selectedCarSource = new BehaviorSubject<any>(null);
  selectedCar$ = this.selectedCarSource.asObservable();

  // Set selected car
  setSelectedCar(car: any) {
    this.selectedCarSource.next(car);
  }

  // getAvailableCars(
  //   rentalTypeName: string,
  //   categoryName: string,
  //   startDate: string
  // ): Observable<any[]> {
  //   const url = `${this.apiUrl}?rentalTypeName=${rentalTypeName}&categoryName=${categoryName}&startDate=${startDate}`;
  //   return this.http.get<any[]>(url);
  // }
}
