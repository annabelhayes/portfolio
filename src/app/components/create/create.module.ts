import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import { NavComponent } from 'src/app/nav/nav.component';

@NgModule({
  declarations: [CreateComponent, NavComponent],
  imports: [CommonModule],
  exports: [CreateComponent],
})
export class CreateModule { }
