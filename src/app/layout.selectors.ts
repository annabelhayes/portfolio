import { LayoutState } from './layout.reducer';

/* Decouple access to the state */
export const getLayoutValues = (state: LayoutState) => state && state.animationStates;

