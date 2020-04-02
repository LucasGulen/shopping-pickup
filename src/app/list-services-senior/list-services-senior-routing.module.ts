import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServicesSeniorPage } from './list-services-senior.page';

const routes: Routes = [
  {
    path: '',
    component: ListServicesSeniorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListServicesSeniorPageRoutingModule {}
