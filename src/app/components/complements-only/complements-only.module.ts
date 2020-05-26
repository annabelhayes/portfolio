import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompOnlyComponent } from './complements-only.component';
import { NavComponent } from '../../nav/nav.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';

@NgModule({
  declarations: [CompOnlyComponent, NavComponent, MiniCardComponent],
  imports: [CommonModule],
  exports: [CompOnlyComponent],
})
export class CompOnlyModule { }
