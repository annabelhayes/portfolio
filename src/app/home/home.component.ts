import { Component, OnInit } from '@angular/core';
import { Store, select, ActionsSubject } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { getLayoutVals } from '../app.selectors';
import { map, shareReplay } from 'rxjs/internal/operators';
import * as actions from '../layout.actions';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  layoutVal$: any;

  onMouseEnter(key) {
    this.OnHover(key);
  }
  OnHover(key) {
    this.store.dispatch(new actions.HoverAction(key, 'active'));
  }
  ngOnInit() {
    /* Map state to props */
    this.layoutVal$ = this.store.pipe(
      select(getLayoutVals),
    );
  }
}


