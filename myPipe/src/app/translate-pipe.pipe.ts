import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatePipe'
})
export class TranslatePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if (value=='Aldo') {
      value='All'
    }
    if (value == 'Giovanni') {
      value = 'John'
    }
    if (value == 'Giacomo') {
      value = 'Jack'
    }

    return value;
  }

}
