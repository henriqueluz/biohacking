export default (state = [], action) => {
  if(action.type === 'ZX_KINDS_LIST_SUCCESS') {
    return action.payload;
  }
  return state;
};
