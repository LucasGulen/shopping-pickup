import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCurrentRequestsPageRoutingModule } from './list-current-requests-routing.module';

import { ListCurrentRequestsPage } from './list-current-requests.page';
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListCurrentRequestsPageRoutingModule,
        PipesModule
    ],
  declarations: [ListCurrentRequestsPage]
})
export class ListCurrentRequestsPageModule {}
