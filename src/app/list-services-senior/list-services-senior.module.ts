import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListServicesSeniorPageRoutingModule } from './list-services-senior-routing.module';

import { ListServicesSeniorPage } from './list-services-senior.page';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListServicesSeniorPageRoutingModule,
        PipesModule
    ],
  declarations: [ListServicesSeniorPage]
})
export class ListServicesSeniorPageModule {}
