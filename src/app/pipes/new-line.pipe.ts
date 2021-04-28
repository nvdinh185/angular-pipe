import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newLine'
})
export class NewLinePipe implements PipeTransform {

  transform(value: string): any {
    if (value) value = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    return value;
  }

}
