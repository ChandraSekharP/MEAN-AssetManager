import { Component, OnInit, Input ,EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';
import { PipeMultipleFilter } from '../multi-filter.pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-delete-assets',
  templateUrl: './delete-assets.component.html',
  styleUrls: ['../assets.component.scss', './delete-assets.component.scss']
})
export class DeleteAssetsComponent implements OnInit {

  constructor(private assetService: AssetService, private ngxSpinnerService: NgxSpinnerService) {}

  selectedRow : Number;

  public enableFilter: boolean;
  public filterText: string;
  public filterPlaceholder: string;
  public filterInput = new FormControl();
  @Input() assetList: Asset[];

  assetsList: Asset[] = [];
  deleteAssets: Asset[] = [];

  public showSuccessMessage:boolean = false;
  public showErrorMessage:boolean = false;
  public showNoAssetsMessage: boolean = false;

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
      });
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

  page:number = 1;

  onPaginate() {
    this.selectedRow = null;
  }

  deleteAsset(asset: Asset) {
    this.assetService.deleteAsset(asset._id).subscribe(res => {
      this.assetsList.splice(this.assetsList.indexOf(asset), 1);
      this.selectedRow = null;
      this.showSuccessMessage = true;
      setTimeout(() => {    //<<<---    using ()=> syntax to hide success message
        this.showSuccessMessage = false;
      }, 2000);
    },
    function(error){
      //console.log(error);
      this.showErrorMessage = true;
      setTimeout(() => {    //<<<---    using ()=> syntax to hide error message
        this.showErrorMessage = false;
      }, 2000);
    })
  }

}
