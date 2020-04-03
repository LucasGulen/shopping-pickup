import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aidDescription'
})
export class AidDescriptionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
