import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  // TODO - get rid of local state and create layout store
  public drawings = {
    'develop': false,
    'design': false,
    'improve': false,
    'create': false,
  };

  // trigger respective animations on mouse enter - check if key has value, check value is false (intial state),
  // then return true so NgClass applies animation classes
  onMouseEnter(key) {
    if (this.drawings.hasOwnProperty(key) && this.drawings[`${key}`] === false) {
      return this.drawings[`${key}`] = true;
    }
  }
}
