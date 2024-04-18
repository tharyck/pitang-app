import { LoginComponent } from './login/login.component';
import { CarComponent } from './car/car.component';
import { AuthGuard } from './helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCarComponent} from "./car/create/create.car.component";
import {EditCarComponent} from "./car/edit/edit.car.component";
import {UserComponent} from "./user/user.component";
import {CreateUserComponent} from "./user/create/create.user.component";
import {EditUserComponent} from "./user/edit/edit.user.component";
import {MeUserComponent} from "./user/me/me.user.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'users/create',
    component: CreateUserComponent,
  },
  {
    path: 'users/edit',
    component: EditUserComponent,
  },
  {
    path: 'me',
    component: MeUserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'cars/create',
    component: CreateCarComponent,
  },
  {
    path: 'cars/edit',
    component: EditCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
