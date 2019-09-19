import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: number): string {
    let result = value.toString();

    result = result.substring(0, 2) + '.' +
             result.substring(2, 5) + '-' +
             result.substring(5);

    return result;
  }

}
