import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSeniorPage } from './main-senior.page';

const routes: Routes = [
  {
    path: '',
    component: MainSeniorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSeniorPageRoutingModule {}
