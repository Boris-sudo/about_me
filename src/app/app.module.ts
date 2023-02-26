import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlimpiadsComponent } from './components/olimpiads/olimpiads.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SearchPipe } from './search.pipe';
import { ShowOlympiadComponent } from './components/show-olympiad/show-olympiad.component';
import { HttpClientModule } from "@angular/common/http";
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    OlimpiadsComponent,
    TopBarComponent,
    AboutMeComponent,
    SearchPipe,
    ShowOlympiadComponent,
    BottomBarComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
