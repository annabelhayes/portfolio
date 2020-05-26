import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IceComponent } from './ice.component';
import { NavComponent } from '../../nav/nav.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';

@NgModule({
  declarations: [IceComponent, NavComponent, MiniCardComponent],
  imports: [CommonModule],
  exports: [IceComponent],
})
export class IceModule { }
