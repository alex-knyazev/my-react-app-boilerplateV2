import { combineReducers } from 'redux';

import avengers from './avengers';

const rootReducer = combineReducers({
  avengers,
});

export default rootReducer;
