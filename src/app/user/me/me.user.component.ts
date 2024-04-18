import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-car-create',
  templateUrl: './me.user.component.html',
  styleUrls: ['./me.user.component.css'],
})
export class MeUserComponent implements OnInit {
  public userForm!: FormGroup;
  user: any;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.usersService.getMeUser().pipe().subscribe((response:any) => {
      this.user = response;
      this.userForm = new FormGroup({
        firstName: new FormControl(this.user?.firstName, Validators.required),
        lastName: new FormControl(this.user?.lastName, Validators.required),
        email: new FormControl(this.user?.email, Validators.required),
        login: new FormControl(this.user?.login, Validators.required),
        phone: new FormControl(this.user?.phone, Validators.required),
        birthday: new FormControl(this.user?.birthday, Validators.required)
      });

    });

    this.userForm = new FormGroup({
      firstName: new FormControl(this.user?.firstName, Validators.required),
      lastName: new FormControl(this.user?.lastName, Validators.required),
      email: new FormControl(this.user?.email, Validators.required),
      login: new FormControl(this.user?.login, Validators.required),
      phone: new FormControl(this.user?.phone, Validators.required),
      birthday: new FormControl(this.user?.birthday, Validators.required)
    });

  }


  cancelar() {
    this.router.navigate(['/cars']);
  }

  getMeUser(): any{
    return this.usersService.getMeUser();
  }
}
