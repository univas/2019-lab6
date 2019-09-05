import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: number): string {
    let cpf = value.toString();
    let result = cpf.substring(0, 3) + '.' +
                 cpf.substring(3, 6) + '.' +
                 cpf.substring(6, 9) + '-' +
                 cpf.substring(9);
    return result;
  }

}
