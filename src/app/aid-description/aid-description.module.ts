import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AidDescriptionPageRoutingModule } from './aid-description-routing.module';

import { AidDescriptionPage } from './aid-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AidDescriptionPageRoutingModule
  ],
  declarations: [AidDescriptionPage]
})
export class AidDescriptionPageModule { }
