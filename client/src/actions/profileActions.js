import axios from 'axios';
import { logoutUser } from './authActions';
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading()); // returning an action of setProfileLoading
  axios
    .get('/api/profile') // get the profile in public api
    .then(res =>
      // we use dispatch "to change data in redux state"
      dispatch({
        // get the profile and pass along the data in response
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((
      err // if there is no profile, and empty payload
    ) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading()); // returning an action of setProfileLoading
  axios
    .get(`/api/profile/handle/${handle}`) // get the profile in public api
    .then(res =>
      // we use dispatch "to change data in redux state"
      dispatch({
        // get the profile and pass along the data in response
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((
      err // if there is no profile, and empty payload
    ) =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add Experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post('/api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add Education
export const addEducation = (eduData, history) => dispatch => {
  axios
    .post('/api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete Experience
export const deleteExperience = id => dispatch => {
  if (window.confirm('Delete Experience')) {
    axios
      .delete(`/api/profile/experience/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// Delete Education
export const deleteEducation = id => dispatch => {
  if (window.confirm('Delete Education')) {
    axios
      .delete(`/api/profile/education/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      })
    );
};

// Delete Account and Profile and remove token from localStorage
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/profile')
      .then(res => {
        dispatch(logoutUser());

        // dispatch({
        //   type: SET_CURRENT_USER,
        //   payload: {},
        // });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
