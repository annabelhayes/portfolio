import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevelopComponent } from './develop.component';

@NgModule({
  declarations: [DevelopComponent],
  imports: [CommonModule],
  exports: [DevelopComponent],
})
export class DevelopModule { }
