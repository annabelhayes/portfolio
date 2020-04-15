import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app.reducer';
import { getLayoutVals } from './app.selectors';
import { map, shareReplay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  layoutVal$: any;

  ngOnInit() {
    /* Map state to props */

    this.layoutVal$ = this.store.pipe(
      select(getLayoutVals),
      shareReplay(), // prevent multi-exectution
    );

    this.layoutVal$.subscribe(val => console.log(val));

  }

}
