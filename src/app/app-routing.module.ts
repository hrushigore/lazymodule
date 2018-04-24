import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'lazy',loadChildren:'./lazyloading/lazyloading.module#LazyloadingModule'},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
  { path: '**', redirectTo: 'lazy' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
