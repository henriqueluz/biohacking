import React from 'react';

export default class ZXComponent extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  authUser = ({user}) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'ZX_USER_REQUEST_SUCCESS', payload: user
    })
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch({type: 'ZX_USER_REQUEST',})
    return false;
  }

}
