import { NgModule } from '@angular/core';
import {AidTitlePipe} from './aid-title.pipe';
import {AidIconPipe} from './aid-icon.pipe';
import {AidDescriptionPipe} from './aid-description.pipe';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [AidTitlePipe, AidIconPipe, AidDescriptionPipe],
    imports: [
    ],
    exports: [AidTitlePipe, AidIconPipe, AidDescriptionPipe],
})

export class PipesModule {}
