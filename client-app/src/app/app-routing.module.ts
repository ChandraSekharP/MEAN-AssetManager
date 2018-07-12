import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './assets/dashboard/dashboard.component';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetsComponent } from './assets/add-assets/add-assets.component';
import { GetAssetsComponent } from './assets/get-assets/get-assets.component';
import { EditAssetsComponent } from './assets/edit-assets/edit-assets.component';
import { DeleteAssetsComponent } from './assets/delete-assets/delete-assets.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'Logout', component: LogoutComponent, canActivate:[AuthGuardService] },
  { path: 'Dashboard', component: DashboardComponent, canActivate:[AuthGuardService] },
  { path: 'Assets', component: AssetsComponent, canActivate:[AuthGuardService],
    children: [
                { path: 'AddAssets', component: AddAssetsComponent },
                { path: 'GetAssets', component: GetAssetsComponent },
                { path: 'EditAssets', component: EditAssetsComponent },
                { path: 'DeleteAssets', component: DeleteAssetsComponent }
             ]
  },
  { path: '**', component: PageNotFoundComponent, canActivate:[AuthGuardService] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
