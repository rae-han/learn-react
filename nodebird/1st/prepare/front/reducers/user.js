
export const initialState = {
  isLoggedIn: false,
  user: null,
  me: null,
  signUpDate: {},
  loginData: {},
}

export const loginAction = data => {
  return {
    type: 'LOG_IN',
    data,
  }
}

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