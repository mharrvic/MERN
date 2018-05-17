import { GET_ERRORS } from '../actions/types';

const initialState = {};


// Manipulate the state to include the new user
export default function(state = initialState, action) {
  switch(action.type) { // Testing the state
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}