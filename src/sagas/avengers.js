import { put, call, takeEvery } from 'redux-saga/effects';

import actionsTypes from '@/constants/actionsTypes';
import request from '@/utils/request';

function* callFetch() {
  const { data, error } = yield call(request.get, '/api/avengers');

  if (!error) {
    yield put({ type: actionsTypes.AVENGERS_FETCH_SUCCESS, payload: data });
  } else {
    yield put({ type: actionsTypes.AVENGERS_FETCH_ERROR, payload: error });
  }
}

export default function* waitFetchCashDesksRequest() {
  yield takeEvery(actionsTypes.AVENGERS_FETCH_REQUEST, callFetch);
}
