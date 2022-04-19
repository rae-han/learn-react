import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';

import todo, { todoSaga } from './todo';

const rootReducer = combineReducers({
  // loading,
  todo,
});

export function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootReducer;