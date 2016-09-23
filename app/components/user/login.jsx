import React from 'react';
import { connect } from 'react-redux';

@connect(({user}) => ({user}))
export default class Login extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  authUser = ({user}) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'ZX_USER_REQUEST_SUCCESS',
      payload: user
    })
  }

  catchError = error => {
    console.log("Error [Dê refresh pra tentar de novo]", error);
  }

  createProvider = () => {
    const provider = new window.firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    return provider;
  }

  redirectToHome = () => {
    if(this.props.user.isLogged) {
      this.context.router.push('/');
      return false;
    }
    return true;
  }

  componentWillRender() {
    return this.redirectToHome();
  }

  componentDidUpdate() {
    return this.redirectToHome();
  }

  componentDidMount() {
    const auth = new window.firebase.auth;
    auth.signInWithPopup(this.createProvider())
        .then(this.authUser)
        .catch(this.catchError);
  }

  render() {
    return (
      <div>Unlogged</div>
    );
  }
}
