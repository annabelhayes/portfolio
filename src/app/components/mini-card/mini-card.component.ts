import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})

export class MiniCardComponent {
  @Input() title: string;
  @Input() skills: string[];
  @Input() duration: string;
  @Input() intro: string;
  @Output() onScrollTo = new EventEmitter();

  scrollTo() {
    this.onScrollTo.emit(null);
  }
}

