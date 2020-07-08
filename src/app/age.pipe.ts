import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {
    if(value) {
      let dtValue: Date = new Date(value);

      let dtJour: Date = new Date();

      let age = dtJour.getFullYear() - dtValue.getFullYear();

      return age;
    }

    return 0;
  }

}
