import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from "./user";
import postSaga from "./post";
import todoSaga from './todo';
import calcSaga from './calc';

axios.defaults.baseURL = 'http://localhost:3080';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
    fork(todoSaga),
    fork(calcSaga),
  ])
}
