import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE } from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading()); // returning an action of setProfileLoading
  axios.get('./api/profile') // get the profile in public api
    .then(res =>
      // we use dispatch "to change data in redux state"
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

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}