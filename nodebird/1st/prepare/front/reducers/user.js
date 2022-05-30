import shortId from "shortid";
import produce from 'immer';

export const initialState = {
  // isLoggedIn: false, // 로그인 돼 있는지
  // logInLoading: false, // 로그인 시도중
  // logOutLoading: false, // 로그아웃 시도중
  // user: null,
  // me: null,
  // signUpDate: {},
  // loginData: {},
  logInLoading: false, // 로그인 시도 중
  logInDone: false,
  logInError: null,
  // # 로그 아웃
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  // # 회원가입
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  // # 닉네임 변경
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {},
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';


// export const loginAction = data => {
//   return {
//     type: 'LOG_IN',
//     data,
//   }
// }
// 보통은 login 을 바로 하는게 아닌 서버에 요청을 한 후 응답을 받을 값을 이용하여 한다.
// 보통 Request, Success, Failure 가 묶어서 움직인다.
export const loginRequestAction = data => {
  console.log('2. reducer/login login request action')
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}
// export const loginSuccessAction = data => {
//   return {
//     type: 'LOG_IN_SUCCESS',
//     data,
//   }
// }
// export const loginFailureAction = data => {
//   return {
//     type: 'LOG_IN_FAILURE',
//     data,
//   }
// }
// # 이게 굳이 필요 없어진 이유
// success 액션과 failure 액션은 사가가 호출해준다.

export const loginAction = (data) => {
  console.log('reducer/login login action')
  return (dispatch, getState) => {
    const state = getState();
    // 여기서 state는 initialState가 나오는데 이 페이지가 아닌 index.js에 있는 state가 나온다.
    console.log(state)

    dispatch(loginRequestAction());

    // axios.post('/api/login')
    //   .then(res => {
    //     dispatch(loginSuccessAction(res.data))
    //   })
    //   .catch(err => {
    //     dispatch(loginFailureAction(err))
    //   })
  }
}
// thunk는 이게 끝이다.
// 한번에 dispatch를 여러번 해주는 기능이 끝이다. 더 해주는 것이 없다.

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  }
}
// export const logoutSuccessAction = () => {
//   return {
//     type: 'LOG_OUT_SUCCESS',
//   }
// }
// export const logoutFailureAction = () => {
//   return {
//     type: 'LOG_OUT_FAILURE',
//   }
// }

const dummyUser = data => ({
  ...data, 
  nickname: 'temp_nickname',
  id: 1,
  Posts: [ { id: 1 } ],
  Followings: [
    { id: 2, nickname: 'han2' }, { id: 3, nickname: 'han3' }, { id: 4, nickname: 'han4' }, 
  ],
  Followers: [
    { id: 2, nickname: 'han2' }, { id: 3, nickname: 'han3' }, { id: 4, nickname: 'han4' }, 
  ],
})

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOG_IN_REQUEST: // 3-2. 이때 조심해야할 것이 user 객체에 있는 내용을 initialState에 바로 넣었기 때문에 뎁스가 1단계 줄었다.
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;
    case LOG_IN_SUCCESS: 
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.me = dummyUser(action.data);
      break;
    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;
    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;
    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;
    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;
    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;
    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({ id: action.data });
      break;
    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter((post) => post.id !== action.data);
      break;
    default:
      break;
  }
});


export default reducer;
