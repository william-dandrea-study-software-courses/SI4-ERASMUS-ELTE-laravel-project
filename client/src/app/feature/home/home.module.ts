import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainEventPageComponent } from './event/main-event-page/main-event-page.component';
import { AddEventPageComponent } from './event/add-event-page/add-event-page.component';
import { EditEventPageComponent } from './event/edit-event-page/edit-event-page.component';
import { EventCardComponent } from './event/event-card/event-card.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import { EventFormComponent } from './event/event-form/event-form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AboutPageComponent,
    MainEventPageComponent,
    AddEventPageComponent,
    EditEventPageComponent,
    EventCardComponent,
    EventFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ]
})
export class HomeModule { }
