import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../libs/api';
// import createRequestThunk from '../libs/createRequestThunk'
import { startLoading, finishLoading } from './loading'
import createRequestSaga from '../libs/createRequestSaga'

const GET_POST = 'sample/GET_POST'; // 요청 시작
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'; // 요청 성공
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'; // 요청 실패

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE'

// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST })

//   try {
//     const response = await api.getPost(id)
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data
//     })
//   } catch (error) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: error,
//       error: true
//     });

//     throw error;
//   }
// };

// export const getPost = createRequestThunk(GET_POST, api.getPost)
export const getPost = createAction(GET_POST, id => id)
export const getUsers = () => async dispatch => {
  dispatch({ type: GET_USERS });

  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data
    })
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true
    })

    throw e;
  }
}

// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST));

//   try {
//     const post = yield call(api.getPost, action.payload)
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data
//     })
//   } catch (e) {
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true
//     })
//   }

//   yield put(finishLoading(GET_POST));
// }

const getPostSaga = createRequestSaga(GET_POST, api.getPost)

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga)
}

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: true
  },
  post: null,
  users: null
}

const sample = handleActions({
  [GET_POST]: state => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: true
    }
  }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false
    },
    post: action.payload
  }),
  [GET_POST_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false
    }
  }),
  [GET_USERS]: state => ({
    ...state,
    laoding: {
      ...state.loading,
      GET_USERS: true
    }
  }),
  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false
    },
    users: action.payload
  }),
  [GET_USERS_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false
    }
  })
}, initialState)

export default sample;