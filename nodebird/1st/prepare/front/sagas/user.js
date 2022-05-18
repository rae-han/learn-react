import { delay, all, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data, a, b) {
  return axios.post('/api/login')
}

function logOutAPI(data, a, b) {
  return axios.post('/api/logout')
}

function* logIn(action) { 
  console.log('4. saga/login logIn')
  try {
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    })
  } catch (err) {
    console.log(err)
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data
    })
  }
}

function* logOut(action) { 
  try {
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
    })
  } catch (error) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data
    })
  }
}

function* watchLogIn() {
  console.log('1. saga/login watchLogIn')
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}