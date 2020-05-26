import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})

export class MiniCardComponent {
  @Input() introSection: boolean;
  @Input() company: string;
  @Input() companies: string;
  @Input() background: string;
  @Input() projectOverview: string;
  @Input() myInvolvement: string;
  @Input() duration: string;
  @Input() role: string;
  @Input() team: string;
  @Input() teamTitle: string;
  @Input() intro: string;
  @Input() imgSrc: string;
  @Output() onScrollTo = new EventEmitter();

  scrollTo() {
    this.onScrollTo.emit(null);
  }
}

