import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {OlimpiadsComponent} from "./components/olimpiads/olimpiads.component";

const routes: Routes = [
  { path: '', component: AboutMeComponent},
  { path: 'olympiads', component: OlimpiadsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
