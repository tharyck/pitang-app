import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersClient {
  constructor(private http: HttpClient) {}

  createUser(firstName: string, lastName: string, email: string, login: string, phone: string, birthday: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/users',
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        login: login,
        phone: phone,
        birthday: birthday,
        password: password
      }, {observe: 'response'});
  };

  editUser(firstName: string, lastName: string, email: string, login: string, phone: string, birthday: string, id: number, password: string ): Observable<any> {
    return this.http.put(environment.apiUrl + '/api/users/'+id,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        login: login,
        phone: phone,
        birthday: birthday,
        id: id,
        password: password
      }, {observe: 'response'});
  };
  getAllUsers(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/users');
  }

  getUser(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/users/'+id);
  }

  getMeUser(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/me');
  }

  deleteUser(id: number): Observable<any> {
    console.log(id)
    return this.http.delete(environment.apiUrl + '/api/users/'+id);
  }
}
