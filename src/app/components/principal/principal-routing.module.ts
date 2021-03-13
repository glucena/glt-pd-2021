import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent,
  children: [
    { path: 'pageOne', loadChildren: () => import('../page-one/page-one.module').then(m => m.PageOneModule) },
    { path: 'pageTwo', loadChildren: () => import('../page-two/page-two.module').then(m => m.PageTwoModule) },
    { path: 'ships', loadChildren: () => import('../ships/ships.module').then(m => m.ShipsModule) },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }
