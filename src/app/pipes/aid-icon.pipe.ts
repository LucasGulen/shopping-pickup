import { Pipe, PipeTransform } from '@angular/core';
import {AidType} from '../interfaces/AidType';
import {aidTypeRecord} from '../../environments/environment';

@Pipe({
  name: 'aidIcon'
})
export class AidIconPipe implements PipeTransform {

  transform(value: AidType): string {
    return aidTypeRecord[AidType[value]].icon;

  }

}
