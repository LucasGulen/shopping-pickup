import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeDetailsLivreurPageRoutingModule } from './demande-details-livreur-routing.module';

import { DemandeDetailsLivreurPage } from './demande-details-livreur.page';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeDetailsLivreurPageRoutingModule
  ],
  declarations: [DemandeDetailsLivreurPage]
})
export class DemandeDetailsLivreurPageModule {}
