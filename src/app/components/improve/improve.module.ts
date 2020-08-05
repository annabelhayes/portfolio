import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImproveComponent } from './improve.component';
import { NavComponent } from 'src/app/nav/nav.component';

@NgModule({
  declarations: [ImproveComponent, NavComponent],
  imports: [CommonModule],
  exports: [ImproveComponent],
})
export class ImproveModule { }
