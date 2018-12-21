import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService} from './auth.service';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WebsitesComponent } from './websites/websites.component';
import { AppRoutingModule } from './app-routing.module';
import { WebsiteService} from './website.service';
import { ReviewsComponent } from './reviews/reviews.component';
import {ReviewsService} from './reviews.service';
import { ReviewsOnSiteComponent } from './reviews-on-site/reviews-on-site.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    WebsitesComponent,
    ReviewsComponent,
    ReviewsOnSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, WebsiteService, ReviewsService, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
