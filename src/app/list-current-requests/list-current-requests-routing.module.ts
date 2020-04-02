import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCurrentRequestsPage } from './list-current-requests.page';

const routes: Routes = [
  {
    path: '',
    component: ListCurrentRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCurrentRequestsPageRoutingModule {}
