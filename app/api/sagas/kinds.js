import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll } from 'firebase-saga';

function* fetchKinds() {
  try {
    const payload = yield call(getAll, 'kinds');
    yield put({
      type: 'ZX_KINDS_LIST_SUCCESS',
      payload,
    });
  } catch (payload) {
    yield put({
      type: 'ZX_KINDS_LIST_FAILURE',
      payload,
    });
  }
}

export default function* watchKinds() {
  yield* takeLatest('ZX_KINDS_LIST_REQUEST', fetchKinds);
}
