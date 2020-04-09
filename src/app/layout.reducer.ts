import * as layout from './layout.actions';


export interface LayoutState {
  animate: string;
  /*
   The description of the different parts of the layout go here
  */
}

/*
  The initial values of the layout state will be initialized here
 */

const initialState: LayoutState = {
  animate: 'hello'
};

/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
export function reducer(
  state = initialState,
  action: layout.Actions
): LayoutState {
  switch (action.type) {
    // case layout.HOVER: {
    //   const heading = action.payload;
    //   return Object.assign({}, state, {
    //     animate: heading
    //   });
    // }
    default:
      return state;
  }
}
