import { Pipe, PipeTransform } from '@angular/core';
import {AidType} from '../interfaces/AidType';
import {aidTypeRecord} from '../../environments/environment';

@Pipe({
  name: 'aidTitle'
})
export class AidTitlePipe implements PipeTransform {

  transform(value: AidType|number): string {
    return aidTypeRecord[value].title;
  }

}
