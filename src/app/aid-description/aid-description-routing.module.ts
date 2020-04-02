import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AidDescriptionPage } from './aid-description.page';

const routes: Routes = [
  {
    path: '',
    component: AidDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AidDescriptionPageRoutingModule {}
