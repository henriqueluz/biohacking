import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';

function fetchActivities() {
  return fetch('./activities.json')
          .then(response => response.json())
          .then(json => json);
}

function* prepareSaga(action) {
  try {
    const payload = yield call(fetchActivities);
    yield put({
      type: 'BIO_ACTIVITIES_SUCCESS',
      payload
    });
  } catch (e) {
    const {message} = e;
    yield put({
      type: 'BIO_ACTIVITIES_FAILURE',
      payload: {
        message
      }
    });
  }
}

function* watchActivities() {
  yield* takeEvery('BIO_ACTIVITIES_REQUEST', prepareSaga);
}

export default function* rootSaga() {
  yield fork(watchActivities);
}
