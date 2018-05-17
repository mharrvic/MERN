const initialState = {
  isAuthenticated: false,
  user: {}
}


// Manipulate the state to include the new user
export default function(state = initialState, action) {
  switch(action.type) { // Testing the state
    default:
      return state;
  }
}