import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export function* go(action) {
  try {
    const { pathname, direction } = action.payload;
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
  } catch (payload) {
    put({
      type: 'ZX_NAVIGATION_FAILURE',
      payload,
    });
  }
}

export default function* navigation() {
  yield* takeLatest('ZX_NAVIGATION', go);
}
