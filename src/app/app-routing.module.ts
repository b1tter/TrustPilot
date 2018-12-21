import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WebsitesComponent} from './websites/websites.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {ReviewsOnSiteComponent} from './reviews-on-site/reviews-on-site.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/reviews',
    pathMatch: 'full'
  },
  {
    path: 'websites',
    component: WebsitesComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'websites/:id',
    component: ReviewsOnSiteComponent
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
