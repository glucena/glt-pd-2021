import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { PageTwoComponent } from './page-two.component';

const routes: Routes = [
  {
    path: '', component: PageTwoComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTwoRoutingModule { }
