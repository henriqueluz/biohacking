export default function (state = {}, action) {

  if (action.type.match(/FAILURE/)) {
    return action.error;
  }
  return state;
}
