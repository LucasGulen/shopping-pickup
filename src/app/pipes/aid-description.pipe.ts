import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'aidDescription'
})
export class AidDescriptionPipe implements PipeTransform {

    transform(value: string, nbWords: number): string {
        let text = '';
        const words = value.split(' ');
        for (let i = 0; i < nbWords; i++) {
            text += words[i] + ' ';
        }
        text += '...';
        return text;
    }
}
