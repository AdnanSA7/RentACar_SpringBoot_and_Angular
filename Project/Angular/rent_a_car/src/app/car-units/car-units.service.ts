import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../model/carModel';
import { CarShowDto } from '../model/carShow';

@Injectable({
  providedIn: 'root'
})
export class CarUnitsService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/api/car';

  getAllCar(): Observable<CarShowDto[]>{
    return this.http.get<CarShowDto[]>(this.baseUrl);
  }


  addCar(car: CarModel, image: File): Observable<any>{
    // console.log(car);
    // console.log(image);

    const formData: FormData = new FormData();

    formData.append('car', JSON.stringify(car));
    // formData.append('car', new Blob([JSON.stringify(car)], { type: 'application/json' }));

    // Add image file
    formData.append('image', image);

    return this.http.post(this.baseUrl,formData, {responseType:'text'});
  }


}
