import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export function* verifyUser(action) {

    const auth = new window.firebase.auth;

    const authenticate  = new Promise((resolve, reject) => {
      auth.onAuthStateChanged(
        user => resolve(user),
        error => reject(error)
      );
    });

    try {
      const payload = yield call(() => authenticate);
      if(payload) {
        console.log("Logged: ", payload.email);
        yield put({type: 'ZX_USER_REQUEST_SUCCESS', payload});
      } else {
        yield put(push('/login'));
      }
    } catch (error) {
      console.log("Error: ", error);
    }

}

export default function* login() {
  yield* takeLatest("ZX_USER_REQUEST", verifyUser);
}
