import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: string): string {
    let upperValue = value.toUpperCase();
    if (upperValue === 'MG') {
      return 'Minas Gerais';
    } else if (upperValue === 'SP') {
      return 'São Paulo';
    } else if (upperValue === 'RJ') {
      return 'Rio de Janeiro';
    } else if (upperValue === 'ES') {
      return 'Espírito Santo';
    }

    return value;
  }

}
