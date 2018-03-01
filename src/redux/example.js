import { createSelector } from 'reselect';

// constants
const MY_ACTION = 'msg/example/MY_ACTION';


// initial state
const INITIAL_STATE = {
  foo: {}
};


// side effects
export function doFoo() {
  return (dispatch) => {
    dispatch({
      type: MY_ACTION,
      payload: {},
    });
  };
}

// selectors
const example = state => state.example;

export const getFoo = createSelector(
  example,
  e => e.foo,
);

// reducers
export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case MY_ACTION:
      return Object.assign({}, state, { payload });
    default:
      return state;
  }
};
