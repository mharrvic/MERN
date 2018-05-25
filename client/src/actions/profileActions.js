import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading()); // returning an action of setProfileLoading
  axios.get('./api/profile') // get the profile in public api
    .then(res =>
      dispatch({ // get the profile and pass along the data in response
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => // if there is no profile, and empty payload
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
}

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}