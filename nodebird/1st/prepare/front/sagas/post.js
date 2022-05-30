import axios from 'axios';
import { getOnDemandLazySlides } from "react-slick/lib/utils/innerSliderUtils";
import { delay, put, takeLatest, all, fork, call } from 'redux-saga/effects'
import shortId from "shortid";

import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
} from '../reducers/post'
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function addPostAPI(data) {
  return axios.post('/api/post', data);
}
function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.id}/comment`, data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();

    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    })
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: ADD_POST_FAILURE,
      // error: error.response.data,
      error: error,
    })
  }
}

function* removePost(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    })
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: REMOVE_POST_FAILURE,
      // error: error.response.data,
      error: error,
    })
  }
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);

    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ])
}