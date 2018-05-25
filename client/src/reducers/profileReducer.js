import { GET_PROFILE, PROFILE_LOADING } from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case PROFILE_LOADING: // this is important so we can saw the status in REDUX
      return {
        ...state, // es6 spred operator, we copy the arrays of the state
        loading: true
      };
      case GET_PROFILE: // get profile filed with the payload, and then the loading stop
        return {
          ...state,
          profile: action.payload,
          loading: false
        };
    default:
      return state;
  }
}