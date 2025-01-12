import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverModel } from '../model/driverModel';

@Injectable({
  providedIn: 'root'
})
export class AdminDriversService {

  constructor(private http: HttpClient) { }
  
    baseUrl: string = 'http://localhost:8080/api/driver';
  
    getAllDriver(): Observable<DriverModel[]>{
      return this.http.get<DriverModel[]>(this.baseUrl);
    }
  
  
    addDriver(driverData: any, driverImage: File): Observable<any>{
      // console.log(car);
      // console.log(image);
  
      const formData: FormData = new FormData();
  
      formData.append('driverData', JSON.stringify(driverData));
      // formData.append('car', new Blob([JSON.stringify(car)], { type: 'application/json' }));
  
      // Add image file
      formData.append('driverImage', driverImage);
  
      return this.http.post(this.baseUrl,formData, {responseType:'text'});
    }
  }
