import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DotGoComponent } from './dotgo.component';
import { NavComponent } from '../../nav/nav.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';
import { IconRowComponent } from '../icon-row/icon-row.component';

@NgModule({
  declarations: [DotGoComponent, NavComponent, MiniCardComponent, IconRowComponent],
  imports: [CommonModule],
  exports: [DotGoComponent],
})
export class DotGoModule { }
