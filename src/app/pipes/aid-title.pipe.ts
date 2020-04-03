import { Pipe, PipeTransform } from '@angular/core';
import {AidType} from '../interfaces/AidType';
import {aidTypeRecord} from '../../environments/environment';

@Pipe({
  name: 'aidTitle'
})
export class AidTitlePipe implements PipeTransform {

  transform(value: AidType): string {
    console.log(value)
    return aidTypeRecord[value].title;
  }

}
