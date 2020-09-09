import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { getLayoutVals } from '../app.selectors';
import { takeWhile } from 'rxjs/internal/operators';
import * as actions from '../layout.actions';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})

export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>, public router: Router) { }
  layoutVal$: any;
  /* very local state, not managed in the global store
   * http://redux.js.org/docs/faq/OrganizingState.html */
  isLoaded = false;

  onMouseEnter(key) {
    this.layoutVal$.pipe(
      takeWhile(val => val[key] !== 'init', true),
    )
      .subscribe(val => {
        if (val[key] === 'init') {
          this.store.dispatch(new actions.HeadingAction(key, 'active'));
        }
      });
  }
  onAnimationEnd(key) {
    this.store.dispatch(new actions.HeadingAction(key, 'complete'));
  }

  showAnimation(key) {
    if (key === 'complete' || key === 'active') {
      return true;
    }
  }

  // wait for animation to complete before navigating to route...
  onClick(key: string, position: number) {
    this.layoutVal$.pipe(
      takeWhile(val => val[key] !== 'complete', true),
    )
      .subscribe(val => {
        if (val[key] === 'complete') {
          this.router.navigate([Object.keys(val)[position]]);
        }
      });
  }

  onLoad() {
    this.isLoaded = true;
  }

  ngOnInit() {
    /* Map state to props */
    this.layoutVal$ = this.store.pipe(
      select(getLayoutVals),
    );
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.store.dispatch(new actions.ResetStateAction);
      }
    });
  }
}
