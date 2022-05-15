import axios from 'axios';

export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false, // 로그인 돼 있는지
  isLoggingOut: false, // 로그아웃 시도중
  user: null,
  me: null,
  signUpDate: {},
  loginData: {},
}

// export const loginAction = data => {
//   return {
//     type: 'LOG_IN',
//     data,
//   }
// }
// 보통은 login 을 바로 하는게 아닌 서버에 요청을 한 후 응답을 받을 값을 이용하여 한다.
// 보통 Request, Success, Failure 가 묶어서 움직인다.
export const loginRequestAction = data => {
  return {
    type: 'LOG_IN_REQUEST',
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
  return (dispatch, getState) => {
    const state = getState();
    // 여기서 state는 initialState가 나오는데 이 페이지가 아닌 index.js에 있는 state가 나온다.
    console.log(state)

    dispatch(loginRequestAction());

    axios.post('/api/login')
      .then(res => {
        dispatch(loginSuccessAction(res.data))
      })
      .catch(err => {
        dispatch(loginFailureAction(err))
      })
  }
}
// thunk는 이게 끝이다.
// 한번에 dispatch를 여러번 해주는 기능이 끝이다. 더 해주는 것이 없다.

export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST',
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
    case 'LOG_IN_REQUEST': // 3-2. 이때 조심해야할 것이 user 객체에 있는 내용을 initialState에 바로 넣었기 때문에 뎁스가 1단계 줄었다.
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: true,
      }
    case 'LOG_IN_SUCCESS': 
      console.log('reducer login success')
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'temp_nickname' }, // 지금 닉네임을 따로 안넣어주기 때문에.
      }
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      }
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
        isLoggedIn: false,           
      }
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null
      }
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggingOut: false,
      }
    default:
      return state;
  }
};

export default reducer;
