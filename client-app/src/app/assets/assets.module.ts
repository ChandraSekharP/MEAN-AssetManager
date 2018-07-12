import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AssetService } from './asset.service';
import { AssetsRoutingModule } from './asset-routing.module';

@NgModule({
  imports: [
    CommonModule,
		ReactiveFormsModule,
		AssetsRoutingModule
  ],
  declarations: [
  ],
  providers: [ AssetService ]
})
export class AssetsModule { }
