import axios from 'axios';

export const initialState = {
  // isLoggedIn: false, // 로그인 돼 있는지
  // logInLoading: false, // 로그인 시도중
  // logOutLoading: false, // 로그아웃 시도중
  // user: null,
  // me: null,
  // signUpDate: {},
  // loginData: {},
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutFailure: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: // 3-2. 이때 조심해야할 것이 user 객체에 있는 내용을 initialState에 바로 넣었기 때문에 뎁스가 1단계 줄었다.
    console.log('3. reducer/login log in requrest')
      return {
        ...state,
        logInLoading: true,
        isLoggedIn: false,
      }
    case LOG_IN_SUCCESS: 
      console.log('5. reducer login success')
      return {
        ...state,
        logInLoading: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'temp_nickname' }, // 지금 닉네임을 따로 안넣어주기 때문에.
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        isLoggedIn: false,
      }
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        isLoggedIn: false,
        me: null
      }
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
      }
    default:
      return state;
  }
};

export default reducer;
