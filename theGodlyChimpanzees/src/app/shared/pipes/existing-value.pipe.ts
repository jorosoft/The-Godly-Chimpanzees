import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'existingValue'
})
export class ExistingValuePipe implements PipeTransform {

  transform(arr: any, flag: boolean): any {
    const exists = [];
    if (arr) {
      arr.forEach(element => {
        if (element.$value) {
          exists.push(element);
        }
      });
    }
    return exists;
  }

}
