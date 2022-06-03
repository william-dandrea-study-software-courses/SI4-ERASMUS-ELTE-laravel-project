import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainEventPageComponent } from './event/main-event-page/main-event-page.component';
import { AddEventPageComponent } from './event/add-event-page/add-event-page.component';
import { EditEventPageComponent } from './event/edit-event-page/edit-event-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    AboutPageComponent,
    MainEventPageComponent,
    AddEventPageComponent,
    EditEventPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
