import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { create } from 'firebase-saga';

function* createUser({ payload }) {
  const { email, displayName, uid, photoURL } = payload;
  const user = {
    email,
    displayName,
    uid,
    photoURL,
    isLogged: true,
  };

  try {
    yield call(create, 'users', () => ({ [`users/${uid}`]: user }));
    yield put({
      type: 'ZX_USER_LOGGED_SUCCESS',
      payload: user,
    });
  } catch (error) {
    yield put({
      type: 'ZX_USER_LOGGED_FAILURE',
      payload: error,
    });
  }
}

export default function* watchUser() {
  yield* takeLatest('ZX_USER_REQUEST_SUCCESS', createUser);
}
