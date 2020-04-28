import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DesignComponent } from './design/design.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CreateComponent } from './create/create.component';
import { ImproveComponent } from './improve/improve.component';
import { DevelopComponent } from './develop/develop.component';


const appRoutes: Routes = [
  {
    path: '',
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
    NavComponent,
    DesignComponent,
    DevelopComponent,
    ImproveComponent,
    CreateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
