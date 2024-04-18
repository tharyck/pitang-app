import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsClient {
  constructor(private http: HttpClient) {}

  createCar(licensePlate: string, year: number, color: string, model: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/cars',
      {
        licensePlate: licensePlate,
        year: year,
        color: color,
        model: model
      }, {observe: 'response'});
  };

  editCar(licensePlate: string, year: number, color: string, model: string, id: number, userId: number): Observable<any> {
    return this.http.put(environment.apiUrl + '/api/cars/'+id,
      {
        licensePlate: licensePlate,
        year: year,
        color: color,
        model: model,
        userId: userId,
        id: id
      }, {observe: 'response'});
  };
  getAllCars(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/cars');
  }

  getCar(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/cars/'+id);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + '/api/cars/'+id);
  }
}
