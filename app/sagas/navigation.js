import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export function* go(action) {
  debugger;
    try {
      const {pathname, direction} = action.payload;
      if (direction === 'right') {
        if (pathname === '/new') {
          yield put(push('/activities'));
        } else if (pathname === '/activities') {
          yield put(push('/search'));
        }
      }
      if (direction === 'left') {
        if (pathname === '/activities') {
          yield put(push('/new'));
        } else if (pathname === '/search') {
          yield put(push('/activities'));
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
}

export default function* navigation() {
  yield* takeLatest('ZX_NAVIGATION', go);
}
