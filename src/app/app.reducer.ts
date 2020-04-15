/*
 Import the layout state
 */
import { LayoutState } from './layout.reducer';
import { reducer as layoutReducer } from './layout.reducer';
import {
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

export const metaReducers: MetaReducer<AppState>[] = [metaReducer];
