import {
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false,
};

// add post
export default (state = initialState, action) => {
  // action in redux
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state, // anything thats in the state
        posts: [action.payload, ...state.posts], // existing post and newpost(...state.posts) overriding post
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };
    default:
      return state;
  }
};
