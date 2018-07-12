import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

import { CustomValidators } from '../is-same-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../welcome/welcome.component.scss']
})
export class LoginComponent {
  public showLoginRules: boolean = true;
  public failedLogin:boolean = false;
  public showErrorMessage:boolean = false;
  @ViewChild('loginName',{ read: ElementRef }) private loginNameRef: ElementRef;

  constructor(
    private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService
  ) {}

  login(user) {
    this.authenticationService.loginExistingUser(user).subscribe(data => {
      if(data)
        this.router.navigate(['/Dashboard']);
    }, (err) => {
      this.loginNameRef.nativeElement.focus();
      this.showLoginRules = false;
      this.failedLogin = true;
      this.showErrorMessage = true;
      setTimeout(() => {    //<<<---    using ()=> syntax
        this.showErrorMessage = false;
      }, 1500);
    });
  }

  isLoggedIn() {

  }
}
