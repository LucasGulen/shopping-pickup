import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MainLivreurPageRoutingModule} from './main-livreur-routing.module';

import {MainLivreurPage} from './main-livreur.page';
import {PipesModule} from '../pipes/pipes.module';
import {AidTitlePipe} from '../pipes/aid-title.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MainLivreurPageRoutingModule,
        PipesModule,
    ],
    declarations: [MainLivreurPage]
})
export class MainLivreurPageModule {
}
