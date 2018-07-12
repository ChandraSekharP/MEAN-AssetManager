import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';

@Component({
  selector: 'add-asset',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss', '../assets.component.scss']
})
export class AddAssetsComponent implements OnInit {
  constructor(private assetService: AssetService) { }

  public categories = [
      { value: 'Desktop Computer', display: 'Desktop Computer' },
      { value: 'CPU', display: 'CPU' },
      { value: 'Laptop', display: 'Laptop' },
      { value: 'Mobile Phone', display: 'Mobile Phone' },
      { value: 'iPad', display: 'iPad' },
      { value: 'Printer', display: 'Printer' },
      { value: 'Data Server', display: 'Data Server' },
      { value: 'Router', display: 'Router' },
      { value: 'Projector', display: 'Projector' },
      { value: 'Television', display: 'Television' },
      { value: 'Video Conference TV', display: 'Video Conference TV' },
      { value: 'VOIP Phone', display: 'VOIP Phone' }
  ];

  public makes = [
      { value: 'N/A', display: 'Not Applicable (N/A)' },
      { value: 'Apple', display: 'Apple' },
      { value: 'Lenovo', display: 'Lenovo' },
      { value: 'Dell', display: 'Dell' },
      { value: 'Cisco', display: 'Cisco' },
      { value: 'Data Link', display: 'Data Link' },
      { value: 'Samsung', display: 'Samsung' },
      { value: 'Google', display: 'Google' },
      { value: 'Hewlett Packard', display: 'Hewlett Packard' },
      { value: 'Intel', display: 'Intel' },
      { value: 'Seagate', display: 'Seagate' },
      { value: 'Benq', display: 'Benq' },
      { value: 'Canon', display: 'Canon' }
  ];

  public showSuccessMessage:boolean = false;
  public showErrorMessage:boolean = false;

  public newAsset: Asset = new Asset()
  assetsList: Asset[];

  ngOnInit(): void {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
      })
  }

  addAsset() {
    this.assetService.addAssetToStore(this.newAsset)
      .subscribe((res) => {
        this.assetsList.push(res.data)
        this.newAsset = new Asset()
        this.showSuccessMessage = true;
        setTimeout(() => {    //<<<---    using ()=> syntax
          this.showSuccessMessage = false;
        }, 2000);
      }, err => {
        setTimeout(() => {    //<<<---    using ()=> syntax
          this.showErrorMessage = true;
        }, 2000);
      })
  }
}
