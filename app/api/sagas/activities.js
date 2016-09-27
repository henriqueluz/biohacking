import { takeEvery } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

function* prepareSaga() {
  try {
    const loggedAction = yield take('ZX_USER_REQUEST_SUCCESS');
    const user = loggedAction.payload;

    const ref = window.firebase.database().ref('activities');
    const once = ref.orderByChild('userId').equalTo(user.uid).once;
    const data = yield call([ref, once], 'value');
    const payload = data.val();

    yield put({
      type: 'ZX_ACTIVITIES_REQUEST_SUCCESS',
      payload,
    });
  } catch (payload) {
    yield put({
      type: 'ZX_ACTIVITIES_REQUEST_FAILURE',
      payload,
    });
  }
}

export default function* watchActivities() {
  yield* takeEvery('ZX_ACTIVITIES_REQUEST', prepareSaga);
}
