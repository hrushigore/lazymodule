import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingComponent } from './lazyloading.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: LazyloadingComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyloadingComponent, HomeComponent]
})
export class LazyloadingModule { }
