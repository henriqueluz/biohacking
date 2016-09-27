export default (state = {}, action) => {
  if(action.type === 'ZX_USER_LOGGED_SUCCESS') {
    console.log('Reducer', action.payload);
    return action.payload;
  }

  if(action.type === 'ZX_USER_LOGGED_FAILURE') {
    console.log("Exception", action.payload);
  }

  return state;
};
