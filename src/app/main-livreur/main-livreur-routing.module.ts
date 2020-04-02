import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLivreurPage } from './main-livreur.page';

const routes: Routes = [
  {
    path: '',
    component: MainLivreurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLivreurPageRoutingModule {}
