
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import User from './welcome/user.model';
import { AuthenticationService } from './authentication.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { ClickOutsideDirective } from './click-detect.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authenticationService: AuthenticationService, public router: Router) {}

  title = 'Asset Manager Application';

  usersList: User[];

  showUserProfile: boolean = false;

  ngOnInit() {
  }

  onClickedOutside(e: Event) {
      this.showUserProfile = false;
  }
}
