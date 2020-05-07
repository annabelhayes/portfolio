import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MiniCardComponent } from './mini-card.component';

@NgModule({
  declarations: [MiniCardComponent],
  imports: [CommonModule],
  exports: [MiniCardComponent],
})
export class MiniCardModule { }
