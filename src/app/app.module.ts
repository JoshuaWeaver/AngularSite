import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CalendarComponent,
    HeaderNavComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }