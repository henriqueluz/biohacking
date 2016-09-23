import { fork } from 'redux-saga/effects';
import watchActivities from 'sagas/activities.js';
import watchUser from 'sagas/user.js';
import watchKinds from 'sagas/kinds.js';

export default function* rootSaga() {
  yield fork(watchActivities);
  yield fork(watchUser);
  yield fork(watchKinds);
}
