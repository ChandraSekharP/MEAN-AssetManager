import { Component, OnInit, Output } from '@angular/core';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../assets.component.scss','./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private assetService: AssetService, private ngxSpinnerService: NgxSpinnerService) { }

  count = 0; i = 0;
  countArray = [];
  assetsList: Asset[] = [];
  public categories = [
      { value: 'Desktop Computer', display: 'Desktop Computer', count: 0 },
      { value: 'CPU', display: 'CPU', count: 0 },
      { value: 'Laptop', display: 'Laptop', count: 0 },
      { value: 'Mobile Phone', display: 'Mobile Phone', count: 0 },
      { value: 'iPad', display: 'iPad', count: 0 },
      { value: 'Printer', display: 'Printer', count: 0 },
      { value: 'Data Server', display: 'Data Server', count: 0 },
      { value: 'Router', display: 'Router', count: 0 },
      { value: 'Projector', display: 'Projector', count: 0 },
      { value: 'Television', display: 'Television', count: 0 },
      { value: 'Video Conference TV', display: 'Video Conference TV', count: 0 },
      { value: 'VOIP Phone', display: 'VOIP Phone', count: 0 }
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.assetService.getAssets()
    .subscribe((assets) => {
      this.ngxSpinnerService.show();
      this.assetsList = assets;
      this.ngxSpinnerService.hide();
      this.categories.forEach((category) => {
        this.count = 0;
        assets.forEach((asset) => {
          if(category.display === asset.category) {
            this.count++;
          }
        }, this)
        this.categories[this.i].count = this.count;
        this.i++;
      });
    });
  }
}
