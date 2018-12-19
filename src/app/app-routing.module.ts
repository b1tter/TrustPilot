import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WebsitesComponent} from './websites/websites.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/websites',
    pathMatch: 'full'
  },
  {
    path: 'websites',
    component: WebsitesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
