import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue';

@Pipe({
  name: 'filterByPseudo'
})
export class FilterByPseudoPipe implements PipeTransform {
  transform(value: Collegue[], arg?: string): any {
    console.log('filter pipe', value, arg);
    if (!arg) {
      return value;
    } else {
      return value.filter(col =>
        col.pseudo.toLowerCase().includes(arg.toLowerCase())
      );
    }
  }
}
