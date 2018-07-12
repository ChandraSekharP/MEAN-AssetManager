import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PipeFilter } from './assets/asset-filter.pipe';
import { PipeMultipleFilter } from './assets/multi-filter.pipe';
import { PipeSort } from './assets/asset-sort.pipe';
import { KeysPipe } from './assets/asset-keys.pipe';
import { CustomValidators } from './is-same-validator';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClickOutsideDirective } from './click-detect.directive';
import { DashboardComponent } from './assets/dashboard/dashboard.component';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetsComponent } from './assets/add-assets/add-assets.component';
import { GetAssetsComponent } from './assets/get-assets/get-assets.component';
import { EditAssetsComponent } from './assets/edit-assets/edit-assets.component';
import { DeleteAssetsComponent } from './assets/delete-assets/delete-assets.component';

import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { WelcomeService } from './welcome/welcome.service';
import { AssetService } from './assets/asset.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    AssetsComponent,
    DashboardComponent,
    AddAssetsComponent,
    GetAssetsComponent,
    EditAssetsComponent,
    DeleteAssetsComponent,
    LogoutComponent,
    ClickOutsideDirective,
    PipeFilter,
    PipeMultipleFilter,
    PipeSort,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  exports: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService, AuthGuardService, WelcomeService, AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
