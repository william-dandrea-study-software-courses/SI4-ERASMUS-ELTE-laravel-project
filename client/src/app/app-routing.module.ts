import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./feature/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
