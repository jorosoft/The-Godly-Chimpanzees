import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nb'
})
export class NbPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const finalText = 'NB: ' + value;
    return finalText;
  }

}
