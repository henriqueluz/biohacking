import React from 'react';
import { connect } from 'react-redux';

@connect(({ user }) => ({ user }))
export default class Login extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    user: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  }

  componentDidMount() {
    const auth = new window.firebase.auth();
    auth.signInWithPopup(this.createProvider())
        .then(this.authUser)
        .catch(this.catchError);
  }

  componentDidUpdate() {
    return this.redirectToHome();
  }

  componentWillRender() {
    return this.redirectToHome();
  }

  catchError = payload => {
    this.props.dispatch({
      type: 'ZX_USER_LOGIN_FAILURE',
      payload,
    });
  }

  createProvider = () => {
    const provider = new window.firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    return provider;
  }

  redirectToHome = () => {
    if (this.props.user.isLogged) {
      this.context.router.push('/');
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>Unlogged</div>
    );
  }
}
