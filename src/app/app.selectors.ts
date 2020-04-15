import { createSelector } from 'reselect';
import { AppState } from './app.reducer';
import * as layoutSelectors from './layout.selectors';
import { LayoutState } from './layout.reducer';


export const getLayoutState = (state: AppState) => state.layout;
export const getLayoutValues = (state: LayoutState) => state && state.animationStates;

export const getLayoutVals = createSelector(
  getLayoutState,
  layoutSelectors.getLayoutValues
);
