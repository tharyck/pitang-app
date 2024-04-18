import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car-create',
  templateUrl: './create.car.component.html',
  styleUrls: ['./create.car.component.css'],
})
export class CreateCarComponent implements OnInit {
  public carForm!: FormGroup;

  constructor(private carService: CarsService, private router: Router) {}

  ngOnInit() {
    this.carForm = new FormGroup({
      licensePlate: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required)
    });
  }

    createCar() {
      this.carService.createCar(
          this.carForm.get('licensePlate')!.value,
          this.carForm.get('year')!.value,
          this.carForm.get('color')!.value,
          this.carForm.get('model')!.value).pipe().subscribe();
      this.router.navigate(['/cars']);
    }

  cancelar() {
    this.router.navigate(['/cars']);
  }
}
