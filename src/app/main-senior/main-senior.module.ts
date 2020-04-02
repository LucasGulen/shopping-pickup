import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSeniorPageRoutingModule } from './main-senior-routing.module';

import { MainSeniorPage } from './main-senior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainSeniorPageRoutingModule
  ],
  declarations: [MainSeniorPage]
})
export class MainSeniorPageModule {}
