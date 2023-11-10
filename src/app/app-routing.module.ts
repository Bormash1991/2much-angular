import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum MainRoutingEnum {
  Auth = 'auth'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: MainRoutingEnum.Auth,
    pathMatch: 'full'
  },
  {
    path: MainRoutingEnum.Auth,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
