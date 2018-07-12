import { Pipe, PipeTransform } from '@angular/core';

import Asset from './asset.model';


@Pipe({
  name: 'orderBy'
})
export class PipeSort implements PipeTransform {

  transform( array: Array<any>, sortColumn: string, sortReverse: boolean ): Array<string> {
    if (array !== undefined) {
      array.sort( ( a: any, b: any ) => {
        let ae = a[ sortColumn ];
        let be = b[ sortColumn ];
        if ( ae == undefined && be == undefined ) return 0;
        if ( ae == undefined && be != undefined ) return sortReverse ? 1 : -1;
        if ( ae != undefined && be == undefined ) return sortReverse ? -1 : 1;
        if ( ae == be ) return 0;
        return sortReverse ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
      });
    }
    return array;
  }
}
