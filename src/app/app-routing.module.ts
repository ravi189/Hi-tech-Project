import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServicesComponent } from './services/services.component';
import { SpecialComponent } from './special/special.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  {path:'special', component: SpecialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent, ServicesComponent ,AppointmentComponent,
  ReviewsComponent,CareersComponent,ContactComponent,SpecialComponent]