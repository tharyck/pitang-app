import { Component, OnInit } from '@angular/core';
import {CarsService} from "../services/cars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: any;

  constructor(private carService: CarsService, private router: Router) {}
  ngOnInit() {
    this.getAll()
  };

 getAll() {
   this.carService.getAll().pipe().subscribe((response:any) => {
     this.cars = response;
   })
 }
  getCar(id: number) {
    this.carService.getCar(id).pipe().subscribe();
    location.reload();
  }

  deleteCar(id: number) {
   this.cars = [];
    this.carService.deleteCar(id).pipe().subscribe();
    location.reload();
  }

  createCar() {
    this.router.navigate(['/cars/create']);
  }

  editeCar(car: any) {
    this.router.navigate(['/cars/edit'], car);
  }
}
