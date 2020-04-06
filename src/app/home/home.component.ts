import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('bracket1', { static: false }) bracket1: ElementRef;
  @ViewChild('bracket2', { static: false }) bracket2: ElementRef;
  @ViewChild('line', { static: false }) line: ElementRef;


  onMouseEnterDevelop() {
    this.bracket1.nativeElement.classList.add('bracket1-animation');
    this.bracket2.nativeElement.classList.add('bracket2-animation');
    this.line.nativeElement.classList.add('line-animation');
  }
}
