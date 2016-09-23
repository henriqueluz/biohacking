import React from 'react';

export default class ZXComponent extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentWillMount() {
    if(!this.props.user.isLogged) {
      this.context.router.push('/login');
    }
    return false;
  }

}
