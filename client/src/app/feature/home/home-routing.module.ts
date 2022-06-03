import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {MainEventPageComponent} from "./event/main-event-page/main-event-page.component";
import {AddEventPageComponent} from "./event/add-event-page/add-event-page.component";
import {EditEventPageComponent} from "./event/edit-event-page/edit-event-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  },
  {
    path: "events",
    component: MainEventPageComponent,
  },
  {
    path: "add-event",
    component: AddEventPageComponent,
  },
  {
    path: "edit-event/:id",
    component: EditEventPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
