import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }
  logout(): void {
    this.authenticationService.logout();
  }

  info(): void {
    this.router.navigate(['/me']);
  }

  login(): void {
    this.router.navigate(['/login']);
    this.authenticationService.logout();
  }
}
