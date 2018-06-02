import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false,
};

// Spread Operator can:
//   add the elements of an existing array into a new array
//   pass elements of an array as arguments to a function
//   copy arrays
//   concatenate arrays

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING: // this is important so we can saw the status in REDUX
      return {
        ...state, // es6 spred operator, we copy the arrays of the state
        loading: true,
      };
    case GET_PROFILE: // get profile filed with the payload, and then the loading stop
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
};
