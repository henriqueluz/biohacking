import Immutable, { Map } from 'immutable';

export default (state = Immutable.fromJS({ data: Map(), editMode: false, entity: {} }), action) => {
  if (action.type === 'ZX_ACTIVITIES_REQUEST_SUCCESS') {
    return Immutable.fromJS({
      data: Map(action.payload),
      editMode: false,
      entity: action.payload,
    });
  }

  if (action.type === 'ZX_ACTIVITIES_EDIT') {
    return Immutable.fromJS({
      data: state.get('data'),
      editMode: true,
      entity: action.payload,
    });
  }

  return state;
};
