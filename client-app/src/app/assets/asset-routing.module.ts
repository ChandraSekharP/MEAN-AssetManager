import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent }  from './assets.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AddAssetsComponent }  from './add-assets/add-assets.component';
import { GetAssetsComponent } from './get-assets/get-assets.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';
import { DeleteAssetsComponent } from './delete-assets/delete-assets.component';

const AssetsRoutes: Routes = [
	{
		path: '/Assets', component: AssetsComponent,
    children: [
								{path: '/AddAssets', component: AddAssetsComponent},
								{path: '/GetAssets', component: GetAssetsComponent},
								{path: '/EditAssets', component: EditAssetsComponent},
								{path: '/DeleteAssets', component: DeleteAssetsComponent}
							]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(AssetsRoutes) ],
  exports: [ RouterModule ]
})
export class AssetsRoutingModule{ }
