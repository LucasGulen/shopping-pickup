import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeDetailsLivreurPage } from './demande-details-livreur.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeDetailsLivreurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeDetailsLivreurPageRoutingModule {}
