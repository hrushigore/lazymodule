import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes =[
  {path:'',component:AdminComponent,
  children:[
    {path:'',component:DefaultComponent}
  ]
}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminComponent, DefaultComponent]
})
export class AdminModule { }
