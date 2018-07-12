import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { CustomValidators } from '../is-same-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../welcome/welcome.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  public showRegistrationRules: boolean = true;
  public showDuplicateMessage: boolean = false;
  public showSuccessMessage: boolean = false;
  public showLoginTab: boolean = false;
  disableSubmitButtton: boolean = true;

@ViewChild('registerMe',{ read: ElementRef }) private registerMeRef: ElementRef;

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService,
    private ngxSpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
      // Use the formbuilder to build the Form model
      this.form  = this.formBuilder.group({
  			username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(22), Validators.pattern('^[a-zA-Z ]+$')]],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        loginName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(11), Validators.pattern('^[a-zA-Z0-9]+$')]],
		    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(11), Validators.pattern('^[a-zA-z0-9_!@#$%^-]+$')]],
			  passwordRetype: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(11)]]
  		}, { validator: CustomValidators.Match('password', 'passwordRetype') })
  }

  get username() { return this.form.get('username'); }
  get email() { return this.form.get('email'); }
  get loginNameRegister() { return this.form.get('loginName'); }
  get passwordRegister() { return this.form.get('password'); }
  get passwordRetype() { return this.form.get('passwordRetype'); }

  onControlFocus() {
    this.showRegistrationRules = true;
    this.showSuccessMessage = false;
    this.showDuplicateMessage = false;
  }

  register(username, email, loginName, password) {
    this.ngxSpinnerService.show();
    this.disableSubmitButtton = false;
    this.showSuccessMessage = false;
    this.showDuplicateMessage = false;
    if(this.form.valid) {
      this.authenticationService.registerNewUser(username, email, loginName, password).subscribe((res) => {
        this.registerMeRef.nativeElement.focus();
        this.form.reset();
        this.showRegistrationRules = false;
        this.showSuccessMessage = true;
        this.ngxSpinnerService.hide();
      }, (err) => {
        if(err.message) {
          this.showRegistrationRules = false;
          this.showDuplicateMessage = true;
          this.ngxSpinnerService.hide();
        }
      });
    }
  }
}
