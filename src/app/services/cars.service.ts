import {Injectable} from '@angular/core';
import {CarsClient} from "../clients/cars.client";

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  constructor(private carsClient: CarsClient) {}

  public getAll(): any {
    return this.carsClient.getAllCars();
  }

  public getCar(id: number): any {
    return this.carsClient.getCar(id);
  }

  public deleteCar(id: number): any {
    return this.carsClient.deleteCar(id);
  }

  public createCar(licensePlate: string, year: number, color: string, model: string): any {
    return this.carsClient.createCar(licensePlate, year, color, model);
  }

  public editCar(licensePlate: string, year: number, color: string, model: string, id: number, userId: number): any {
    return this.carsClient.editCar(licensePlate, year, color, model, id, userId);
  }

}
