import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddModelComponent } from './add-model/add-model.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    routingComponents,
    AddModelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
