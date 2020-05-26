import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DesignComponent } from './components/design/design.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CreateComponent } from './components/create/create.component';
import { ImproveComponent } from './components/improve/improve.component';
import { DevelopComponent } from './components/develop/develop.component';
import { IceComponent } from './components/ice/ice.component';
import { DotGoComponent } from './components/dotgo/dotgo.component';
import { CompOnlyComponent } from './components/complements-only/complements-only.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';


const appRoutes: Routes = [
  {
    path: 'portfolio',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: ' ',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'design',
    component: DesignComponent,
    data: { animation: 'Design' }
  },
  {
    path: 'ice',
    component: IceComponent,
    data: { animation: 'ICE' }
  },
  {
    path: 'dotgo',
    component: DotGoComponent,
    data: { animation: 'DotGo' }
  },
  {
    path: 'complements-only',
    component: CompOnlyComponent,
    data: { animation: 'CompOnly' }
  },
  {
    path: 'develop',
    component: DevelopComponent,
    data: { animation: 'Develop' }
  },
  {
    path: 'improve',
    component: ImproveComponent,
    data: { animation: 'Improve' }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { animation: 'Create' }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    IceComponent,
    NavComponent,
    DesignComponent,
    DevelopComponent,
    ImproveComponent,
    CreateComponent,
    DotGoComponent,
    CompOnlyComponent,
    MiniCardComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
