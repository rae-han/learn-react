import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'

import counter from './counter';
import sample from './sample';
import sample2, { sampleSaga } from './sampleSaga';

// common
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  sample2,
  loading,
});

export function* rootSaga() {
  yield all([sampleSaga()]);
}

export default rootReducer;