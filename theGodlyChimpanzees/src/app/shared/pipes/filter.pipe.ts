import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDatepicker'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any, filter: any): any {
    console.log(filter);
    const exists = [];
    if (filter && filter.day) {
      arr.forEach(element => {
        if ( filter.formatted === element.date ) {
          exists.push(element);
        }
      });
      return exists;
    } else {
      return arr;
    }
  }

}
