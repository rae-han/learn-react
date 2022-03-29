import { createAction, handleActions } from 'redux-actions'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading'
import createRequestSaga from '../lib/createRequestSaga';

const GET_POST = 'sampleSaga/GET_POST';
const GET_POST_SUCCESS = 'sampleSaga/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sampleSaga/GET_POST_FAILURE';

const GET_USERS = 'sampleSaga/GET_USERS';
const GET_USERS_SUCCESS = 'sampleSaga/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sampleSaga/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  // yield takeLatest(GET_POST, getPostSaga);
  // yield takeLatest(GET_USERS, getUsersSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null
}

const sample2 = handleActions({
  [GET_POST_SUCCESS]: (state, action) => {
    console.log(123123123123)
    console.log(11111, action)
    return ({
      ...state,
      post: action.payload
    })
  },
  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: action.payload
  })
}, initialState)

export default sample2;