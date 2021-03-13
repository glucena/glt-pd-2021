import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', loadChildren: () => import(`./components/register/register.module`).then(m => m.RegisterModule) },
  { path: 'principal', loadChildren: () => import(`./components/principal/principal.module`).then(m => m.PrincipalModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
