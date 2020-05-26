import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignComponent } from './design.component';
import { NavComponent } from '../../nav/nav.component';

@NgModule({
  declarations: [DesignComponent, NavComponent],
  imports: [CommonModule],
  exports: [DesignComponent],
})
export class DesignModule { }
