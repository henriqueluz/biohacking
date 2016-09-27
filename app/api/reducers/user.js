export default (state = {}, action) => {
  if (action.type === 'ZX_USER_LOGGED_SUCCESS') {
    return action.payload;
  }
  return state;
};
