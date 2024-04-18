import {Injectable} from '@angular/core';
import {UsersClient} from "../clients/users.client";

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private usersClient: UsersClient) {}

  public getAll(): any {
    return this.usersClient.getAllUsers();
  }

  public getUser(id: number): any {
    return this.usersClient.getUser(id);
  }

  public deleteUser(id: number): any {
    return this.usersClient.deleteUser(id);
  }

  public createUser(firstName: string, lastName: string, email: string, login: string, phone: string, birthday: string, password: string ): any {
    return this.usersClient.createUser(firstName, lastName, email, login, phone, birthday, password);
  }

  public editUser(firstName: string, lastName: string, email: string, login: string, phone: string, birthday: string, id: number, password: string): any {
    return this.usersClient.editUser(firstName, lastName, email, login, phone, birthday, id, password);
  }

  public getMeUser(): any {
    return this.usersClient.getMeUser();
  }
}
