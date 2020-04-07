import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
