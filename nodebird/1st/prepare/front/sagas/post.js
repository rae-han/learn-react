import axios from 'axios';
import { delay, put, takeLatest, all, fork, call, throttle } from 'redux-saga/effects'
import shortId from "shortid";

import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  generateDummyPost,
} from '../reducers/post'
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function addPostAPI(data) {
  console.log(data)
  return axios.post('/post', { content: data });
}
function removePostAPI(data) {
  return axios.delete('/post', data);
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* loadComment(action) {
  try {
    // const result = yield call(loadPostAPI, action.data);
    yield delay(1000);

    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10),
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: error.response.data,
      // error: error,
    })
  }
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);

    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        content: result.data,
      },
    })
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: ADD_POST_FAILURE,
      error: error.response.data,
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
    const result = yield call(addCommentAPI, action.data);

    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchLoadPost() {
  yield throttle(4*1000, LOAD_POSTS_REQUEST, loadComment);
  // yield takeLatest(LOAD_POSTS_REQUEST, loadComment);
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
    fork(watchLoadPost),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ])
}
