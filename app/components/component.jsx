import React from 'react';

export default (klass) => class extends klass {

  componentWillReceiveProps(nextProps) {
  
    // if (nextProps.user.status === 'authenticated' && nextProps.user.user &&
    //    !nextProps.user.error) {
    //      this.props.changeLocationOnSignIn(this.props.nextPathname);
    // }
  }

}
