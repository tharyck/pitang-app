import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {map} from "rxjs";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-car-create',
  templateUrl: './edit.user.component.html',
  styleUrls: ['./edit.user.component.css'],
})
export class EditUserComponent implements OnInit {
  public userForm!: FormGroup;
  user: any;

  constructor(private usersService: UsersService, private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras;
    if (!this.user) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    console.log(this.user)

    this.userForm = new FormGroup({
        firstName: new FormControl(this.user.firstName, Validators.required),
        lastName: new FormControl(this.user.lastName, Validators.required),
        email: new FormControl(this.user.email, Validators.required),
        login: new FormControl(this.user.login, Validators.required),
        phone: new FormControl(this.user.phone, Validators.required),
        birthday: new FormControl(this.user.birthday, Validators.required),
        password: new FormControl('', Validators.required),
      });
  }

    editUser() {
      this.usersService.editUser(
        this.userForm.get('firstName')!.value,
        this.userForm.get('lastName')!.value,
        this.userForm.get('email')!.value,
        this.userForm.get('login')!.value,
        this.userForm.get('phone')!.value,
        this.userForm.get('birthday')!.value,
        this.user.id,
        this.userForm.get('password')!.value,
      ).pipe().subscribe();
      this.router.navigate(['']);
    }

  cancelar() {
    this.router.navigate(['']);
  }
}
