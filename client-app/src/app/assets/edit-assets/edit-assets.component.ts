import { Component, OnInit, Input ,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';
import { PipeMultipleFilter } from '../multi-filter.pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-assets',
  templateUrl: './edit-assets.component.html',
  styleUrls: ['../assets.component.scss', './edit-assets.component.scss']
})
export class EditAssetsComponent implements OnInit {

  public enableFilter: boolean;
  public filterText: string;
  public filterPlaceholder: string;
  public filterInput = new FormControl();
  @Input() assetList: Asset[];

  selectedRow : Number;
  setClickedRow : Function;

  public showSuccessMessage:boolean = false;
  public showErrorMessage:boolean = false;

  constructor(private assetService: AssetService, private ngxSpinnerService: NgxSpinnerService) {
    this.setClickedRow = function(index){
        this.selectedRow = index;
    }
  }

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

  public hideEditIcon: boolean = false;
  public hideConfirmIcons: boolean = true;
  public showNoAssetsMessage: boolean = false;

  assetsList: Asset[];
  editAssets: Asset[] = [];
  assetId: string = '';

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
      this.enableFilter = true;
      this.filterText = "";
    this.filterPlaceholder = "Search asset info..."
    this.filterInput
      .valueChanges
      .debounceTime(200)
      .subscribe(term => {
        this.filterText = term;
      });
  }

  onPaginate() {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
      })
    this.selectedRow = -1;
  }

  editAsset(asset: Asset) {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
      })
    this.assetId = asset.assetId;
    if(this.assetsList.includes(asset)) {
      if(!this.editAssets.includes(asset)) {
        this.editAssets.push(asset)
      } else {
        this.editAssets.splice(this.editAssets.indexOf(asset), 1)
        this.assetService.editAsset(asset).subscribe(res => {
        }, err => {
          this.editAsset(asset)
        })
      }
    }
  }

  doneAsset(asset:Asset) {
    this.assetService.editAsset(asset).subscribe(res => {
      this.showSuccessMessage = true;
      setTimeout(() => {    //<<<---    using ()=> syntax
        this.showSuccessMessage = false;
      }, 2000);
    }, err => {
      this.editAsset(asset)
      this.showErrorMessage = true;
      setTimeout(() => {    //<<<---    using ()=> syntax
        this.showErrorMessage = false;
      }, 2000);
    })
    this.selectedRow = null;
  }

  submitAsset(event, asset:Asset) {
    if(event.keyCode ==13) {
      this.assetService.editAsset(asset).subscribe(res => {
        this.showSuccessMessage = true;
        setTimeout(() => {    //<<<---    using ()=> syntax
          this.showSuccessMessage = false;
        }, 2000);
      }, err => {
        this.editAsset(asset)
        this.showErrorMessage = true;
        setTimeout(() => {    //<<<---    using ()=> syntax
          this.showErrorMessage = false;
        }, 2000);
      })
      this.selectedRow = null;
    }
  }

  cancelUpdate() {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
      })
      this.selectedRow = null;
  }

}
