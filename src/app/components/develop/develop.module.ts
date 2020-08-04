import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevelopComponent } from './develop.component';
import { NavComponent } from '../../nav/nav.component';
@NgModule({
  declarations: [DevelopComponent, NavComponent],
  imports: [CommonModule],
  exports: [DevelopComponent],
})
export class DevelopModule { }
