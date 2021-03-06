import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate() {
    if (this.authenticationService.isLoggedIn()) return true;
    this.router.navigateByUrl('/');
    return false;
  }
}
