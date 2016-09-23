export default (state = [], action) => {
  if(action.type === 'BIO_ACTIVITIES_SUCCESS') {
    return action.payload;
  }
  return state;
};
