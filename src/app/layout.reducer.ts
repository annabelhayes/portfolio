import * as layout from './layout.actions';

export interface LayoutState {
  animationStates: {
    develop: string,
    design: string,
    improve: string,
    create: string
  };
  /*
   The description of the different parts of the layout go here
  */
}
/*
  The initial values of the layout state will be initialized here
 */
const initialState: LayoutState = {
  animationStates: {
    develop: null,
    design: null,
    improve: null,
    create: null
  },
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
    case layout.HOVER: {
      return Object.assign({}, state, {
        animationStates:
        {
          ...state.animationStates,
          [action.payload.key]: action.payload.value
        }
      });
    }
    default:
      return state;
  }
}
