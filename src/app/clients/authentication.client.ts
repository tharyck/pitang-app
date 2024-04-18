import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(login: string, password: string) {
    return this.http.post(
      environment.apiUrl + '/api/signin',
      {
        login: login,
        password: password,
      }, {observe: 'response'});
  }
}
