import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DotGoComponent } from './dotgo.component';
import { NavComponent } from '../../nav/nav.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';

@NgModule({
  declarations: [DotGoComponent, NavComponent, MiniCardComponent],
  imports: [CommonModule],
  exports: [DotGoComponent],
})
export class DotGoModule { }
