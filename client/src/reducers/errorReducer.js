import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};

// Manipulate the state to include the new user
export default function(state = initialState, action) {
  switch (
    action.type // Testing the state
  ) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {}; // clear object
    default:
      return state;
  }
}
