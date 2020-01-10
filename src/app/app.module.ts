import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { BannerExternalComponent } from './banner-external/banner-external.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    Banner2Component,
    DetailComponent,
    BannerExternalComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
