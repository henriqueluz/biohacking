import { fork } from 'redux-saga/effects';
import watchActivities from 'api/sagas/activities.js';
import watchUser from 'api/sagas/user.js';
import watchKinds from 'api/sagas/kinds.js';
import createActivity from 'api/sagas/create.js';
import login from 'api/sagas/login.js';
import navigation from 'api/sagas/navigation.js';

export default function* rootSaga() {
  yield fork(watchActivities);
  yield fork(watchUser);
  yield fork(watchKinds);
  yield fork(createActivity);
  yield fork(login);
  yield fork(navigation);
}
