import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixRolePage } from './choix-role.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixRolePageRoutingModule {}
