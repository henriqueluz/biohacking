import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { create } from 'firebase-saga';
import { push } from 'react-router-redux';
import uid from 'uid-safe';

function* createAndRedirect({ payload }) {
  const id = uid.sync(18);
  const activity = { id, ...payload };
  try {
    yield call(create, 'activities', () => ({ [`activities/${id}`]: activity }));
    yield put(push('/activities'));
  } catch (error) {
    yield put({
      type: 'ZX_ACTIVITY_CREATE_FAILURE',
      payload: error,
    });
  }
}

export default function* createActivity() {
  yield* takeLatest('ZX_ACTIVITY_CREATE', createAndRedirect);
}
