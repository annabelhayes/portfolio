
/*
  Import the store logger to log all the actions to the console
 */
import { storeLogger } from 'ngrx-store-logger';

/*
 Import the layout state
 */
import { LayoutState } from './layout.reducer';
import { reducer as layoutReducer } from './layout.reducer';

// import { compose } from '@ngrx/core';
import {
  // combineReducers,
  ActionReducerMap,
  MetaReducer,
  ActionReducer
} from '@ngrx/store';

export interface AppState {
  layout: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  layout: layoutReducer
};

export function metaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state: any, action: any) {
    return reducer(state, action);
  };
}

// const developmentReducer: Function = compose(storeLogger(), combineReducers)(
//   reducers
// );
// export function metaReducer(state: any, action: any) {
//   return developmentReducer(state, action);
// }

export const metaReducers: MetaReducer<AppState>[] = [metaReducer];
