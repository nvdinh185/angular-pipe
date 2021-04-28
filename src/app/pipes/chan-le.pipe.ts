import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chanLe'
})
export class ChanLePipe implements PipeTransform {

  transform(value: number): string {
    if (value % 2 !== 0) return value + ' là số lẻ!';
    return value + ' là số chẵn!';
  }

}
