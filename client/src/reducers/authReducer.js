import { SET_CURRENT_USER } from '../actions/types';
import  isEmpty  from '../validation/is-empty'; 

const initialState = {
  isAuthenticated: false,
  user: {}
}


// Manipulate the state to include the new user
export default function(state = initialState, action) {
  switch(action.type) { // Testing the state
    case SET_CURRENT_USER:
      return { // Check if the jwt_decoded is Authenticated and not empty
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}