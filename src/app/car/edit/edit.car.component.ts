import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-car-create',
  templateUrl: './edit.car.component.html',
  styleUrls: ['./edit.car.component.css'],
})
export class EditCarComponent implements OnInit {
  public carForm!: FormGroup;
  car: any;

  constructor(private carService: CarsService, private router: Router) {
    this.car = this.router.getCurrentNavigation()?.extras;
    if (!this.car) {
      this.router.navigate(['cars']);
    }
  }

  ngOnInit() {
    console.log(this.car)

    this.carForm = new FormGroup({
      licensePlate: new FormControl(this.car.licensePlate, Validators.required),
      year: new FormControl(this.car.year, Validators.required),
      color: new FormControl(this.car.color, Validators.required),
      model: new FormControl(this.car.model, Validators.required)
    });
  }

    editCar() {
      this.carService.editCar(
          this.carForm.get('licensePlate')!.value,
          this.carForm.get('year')!.value,
          this.carForm.get('color')!.value,
          this.carForm.get('model')!.value, this.car.id, this.car.userId).pipe().subscribe();
      this.router.navigate(['/cars']);
    }

  cancelar() {
    this.router.navigate(['/cars']);
  }
}
