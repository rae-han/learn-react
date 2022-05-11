import axios from 'axios';

export const initialState = {
  isLoggedIn: false,
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
export const loginSuccessAction = data => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
}
export const loginFailureAction = data => {
  return {
    type: 'LOG_IN_FAILURE',
    data,
  }
}

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

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN': // 3-2. 이때 조심해야할 것이 user 객체에 있는 내용을 initialState에 바로 넣었기 때문에 뎁스가 1단계 줄었다.
      return {
        ...state,
        isLoggedIn: true,
      }
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,           
      }
    default:
      return state;
  }
};

export default reducer;
