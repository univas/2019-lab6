import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellPhone'
})
export class CellPhonePipe implements PipeTransform {

  transform(value: number, addDDD : boolean): string {
    let cellPhone = value.toString();
    let result = '';
    
    if (addDDD) {
      result = '(35) ';
    }

    result += cellPhone.substring(0,5) + '-' +
              cellPhone.substring(5);

    return result;
  }

}
