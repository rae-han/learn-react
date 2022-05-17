import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data, a, b) {
  return axios.post('/api/login')
}

function logOutAPI(data, a, b) {
  return axios.post('/api/logout')
}

function* logIn(action) { 
  console.log('saga user login')
  console.log(action)
  console.log(action.data)

  try {
    delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data
    })
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data
    })
  }
}

function* logOut(action) { 
  try {
    delay(1000);
    
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