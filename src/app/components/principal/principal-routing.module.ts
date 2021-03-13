import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent,
  children: [
    { path: 'pageOne', component: PageOneComponent },
    { path: 'pageTwo', component: PageTwoComponent },
    { path: 'ships', loadChildren: () => import(`../ships/ships.module`).then(m => m.ShipsModule) },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }