import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private userService: UsersService, private router: Router) {}
  ngOnInit() {
    this.getAll()
  };

 getAll() {
   this.userService.getAll().pipe().subscribe((response:any) => {
     this.users = response;
   })
 }
  getUser(id: number) {
    this.userService.getUser(id).pipe().subscribe();
    location.reload();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).pipe().subscribe();
    location.reload();
  }

  createUser() {
    this.router.navigate(['/users/create']);
  }

  editeUser(user: any) {
    this.router.navigate(['/users/edit'], user);
  }
}
