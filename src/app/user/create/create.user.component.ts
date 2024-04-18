import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-car-create',
  templateUrl: './create.user.component.html',
  styleUrls: ['./create.user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public userForm!: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

    createUser() {
      this.usersService.createUser(
          this.userForm.get('firstName')!.value,
          this.userForm.get('lastName')!.value,
          this.userForm.get('email')!.value,
          this.userForm.get('login')!.value,
          this.userForm.get('phone')!.value,
          this.userForm.get('birthday')!.value,
        this.userForm.get('password')!.value).pipe().subscribe();
      this.router.navigate(['']);
    }

  cancelar() {
    this.router.navigate(['']);
  }
}
