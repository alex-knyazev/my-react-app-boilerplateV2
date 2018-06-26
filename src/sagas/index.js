import { all, call } from 'redux-saga/effects';
import avengers from './avengers';

export default function* root() {
  yield all([
    call(avengers),
    // add new sagas here
  ]);
}
