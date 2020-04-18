import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'develop',
    component: DevelopComponent
  },
  {
    path: 'improve',
    component: ImproveComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    BrowserModule,
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
