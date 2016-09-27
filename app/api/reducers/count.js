export default (state = 0, action) => {
  if(action.type === 'BIO_COUNT_SUCCESS') {
    return action.payload;
  }
  return state;
};
