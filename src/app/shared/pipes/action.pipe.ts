import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'action'
})
export class ActionPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (value === 'AIMER') {
      return 'aimé';
    } else {
      return 'détesté';
    }
  }
}
