import { Component, Input } from '@angular/core';
import { IconRow } from 'src/app/model/icons';

@Component({
  selector: 'app-icon-row',
  templateUrl: './icon-row.component.html',
  styleUrls: ['./icon-row.component.css']
})

export class IconRowComponent {
  @Input() iconRow: IconRow[];

}

