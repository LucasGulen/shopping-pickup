import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AidDescriptionPageRoutingModule } from './aid-description-routing.module';

import { AidDescriptionPage } from './aid-description.page';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AidDescriptionPageRoutingModule,
        PipesModule
    ],
  declarations: [AidDescriptionPage]
})
export class AidDescriptionPageModule { }
