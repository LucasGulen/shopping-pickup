import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main-senior',
    loadChildren: () => import('./main-senior/main-senior.module').then( m => m.MainSeniorPageModule)
  },
  {
    path: 'choix-role',
    loadChildren: () => import('./choix-role/choix-role.module').then( m => m.ChoixRolePageModule)
  },
  {
    path: 'main-livreur',
    loadChildren: () => import('./main-livreur/main-livreur.module').then( m => m.MainLivreurPageModule)
  },
  {
    path: 'list-current-requests',
    loadChildren: () => import('./list-current-requests/list-current-requests.module').then( m => m.ListCurrentRequestsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
