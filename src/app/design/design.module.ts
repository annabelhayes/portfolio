import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignComponent } from './design.component';
import { NavComponent } from '../nav/nav.component';
import { MiniCardComponent } from '../components/mini-card/mini-card.component';

@NgModule({
  declarations: [DesignComponent, NavComponent, MiniCardComponent],
  imports: [CommonModule],
  exports: [DesignComponent],
})
export class DesignModule { }
