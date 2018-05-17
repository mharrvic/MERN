import axios from 'axios';
import { GET_ERRORS } from './types';

// Register User
export const registeruser = (userData, history) => dispatch =>  {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({ // Asynchronous call, Thunk middleware for Redux, can return a function instead of an action.
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};