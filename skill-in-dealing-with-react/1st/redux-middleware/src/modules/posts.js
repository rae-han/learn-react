// import { handleActions } from 'redux-actions';
import { call, getContext, put, takeEvery } from 'redux-saga/effects';
import * as postsAPI from '../api/posts';
import { createPromiseThunk, createPromiseThunkById, createPromiseSaga, reducerUtils, handleAsyncActions, handleAsyncActionsById, createPromiseSagaById } from '../libs/utils/asyncUtils'

/* 액션 타입 */
// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const CLEAR_POST = 'CLEAR_POST'
const GO_TO_HOME = 'GO_TO_HOME'

export const getPosts = () => ({ type: GET_POSTS })
export const getPost = id => ({ type: GET_POST, payload: id, meta: id })
export const goToHome = () => ({ type: GO_TO_HOME })

// export const getPosts = () => async dispatch => {
//   dispatch({ type: GET_POSTS })

//   try {
//     const posts = await postsAPI.getPosts();
//     dispatch({ type: GET_POSTS_SUCCESS, posts })
//   } catch (error) {
//     dispatch({ type: GET_POSTS_ERROR, error })
//   }
// }

// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST })

//   try {
//     const post = await postsAPI.getPost(id);
//     dispatch({ type: GET_POST_SUCCESS, post })
//   } catch (error) {
//     dispatch({ type: GET_POST_ERROR, error })
//   }
// }
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts)
// export const getPost = createPromiseThunk(GET_POST, postsAPI.getPost)
// export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPost)

// function* getPostsSaga() {
//   try {
//     const posts = yield call(postsAPI.getPosts); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts
//     }); // 성공 액션 디스패치
//   } catch (e) {
//     yield put({
//       type: GET_POSTS_ERROR,
//       error: true,
//       payload: e
//     }); // 실패 액션 디스패치
//   }
// }

// // 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
// function* getPostSaga(action) {
//   const param = action.payload;
//   const id = action.meta;
//   try {
//     const post = yield call(postsAPI.getPost, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post,
//       meta: id
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_ERROR,
//       error: true,
//       payload: e,
//       meta: id
//     });
//   }
// }

// const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
// const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPost)

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPost);
function* goToHomeSaga() {
  const history = yield getContext('history');
  history.push('/')
}

// 사가들을 합치기
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga)
}

export const clearPost = () => ({ type: CLEAR_POST })
// export const goToHome = () => (dispatch, getState, {history}) => {
//   history.push('/');
// }

const initialState = {
  // posts: {
  //   loading: false,
  //   data: null,
  //   error: null
  // },
  // post: {
  //   loading: false,
  //   data: null,
  //   error: null
  // }
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action)
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      // return handleAsyncActions(GET_POST, 'post')(state, action)
      return handleAsyncActionsById(GET_POST, 'post', true)(state, action)
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial()
      }
    default:
      return state;
  }
}

// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading()
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload) // action.posts -> action.payload 로 변경됐습니다.
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.error)
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading()
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.success(action.payload) // action.post -> action.payload 로 변경됐습니다.
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.error)
//       };
//     default:
//       return state;
//   }
// }

// const posts = handleActions({
//   [GET_POSTS]: state =>({
//     ...state,
//     posts: {
//       ...state.posts,
//       loading: true
//     }
//   }),
//   [GET_POSTS_SUCCESS]: (state, action) =>({
//     ...state,
//     posts: {
//       ...state.posts,
//       loading: false,
//       data: action.posts
//     }
//   }),
//   [GET_POSTS_ERROR]: (state, action) =>({
//     ...state,
//     posts: {
//       ...state.posts,
//       loading: false,
//       error: action.error
//     }
//   }),
//   [GET_POST]: state =>({
//     ...state,
//     post: {
//       ...state.post,
//       loading: true
//     }
//   }),
//   [GET_POST_SUCCESS]: (state, action) =>({
//     ...state,
//     post: {
//       ...state.post,
//       loading: false,
//       data: action.post
//     }
//   }),
//   [GET_POST_ERROR]: (state, action) =>({
//     ...state,
//     post: {
//       ...state.post,
//       loading: false,
//       error: action.error
//     }
//   }),
//   [CLEAR_POST]: state => ({
//     ...state,
//     post: {
//       ...state.post,
//       data: null
//     }
//   })
// }, initialState)
// 
// export default posts