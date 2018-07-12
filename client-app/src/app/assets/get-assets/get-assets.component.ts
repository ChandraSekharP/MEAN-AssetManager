import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';
import { PipeSort } from '../asset-sort.pipe';
import { KeysPipe } from '../asset-keys.pipe';
import { PipeFilter } from '../asset-filter.pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-assets',
  templateUrl: './get-assets.component.html',
  styleUrls: ['../assets.component.scss', './get-assets.component.scss']
})
export class GetAssetsComponent implements OnInit {

  constructor(private assetService: AssetService, private ngxSpinnerService: NgxSpinnerService) {}

  hideSortIcons:boolean = false;
  public showNoAssetsMessage: boolean = false;
  sortReverse = true;
  sortColumn = "date";
  @Input('sort-direction')

  assetsList: Asset[];
  filter: Asset = new Asset();
  pageNumber: number = 1;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.assetService.getAssets()
      .subscribe(assets => {
        this.ngxSpinnerService.show();
        if(assets.length < 1) {
          this.showNoAssetsMessage = true;
        }
        this.assetsList = assets;
        this.ngxSpinnerService.hide();
      })
  }

}
