import { takeEvery } from 'redux-saga';
import { fork, call, put, take } from 'redux-saga/effects';

function* prepareSaga(action) {

    try {
      const loggedAction = yield take('ZX_USER_REQUEST_SUCCESS');
      const user = loggedAction.payload;

      const ref = firebase.database().ref('activities');
      const once = ref.orderByChild("userId").equalTo(user.uid).once;
      const data = yield call([ref, once], 'value');
      const payload = data.val();

      yield put({
        type: 'ZX_ACTIVITIES_REQUEST_SUCCESS',
        payload
      });
    } catch (error) {
      console.log("Error", error);
      yield put({
        type: 'ZX_ACTIVITIES_REQUEST_FAILURE',
        payload: {
          message: error.message
        }
      });
    }

}

export default function* watchActivities() {
  yield* takeEvery('ZX_ACTIVITIES_REQUEST', prepareSaga);
}
