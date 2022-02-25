import React, { useReducer } from 'react';

const ProfileDispatch = React.createContext(null);

const INITIAL_STATE = { num: 0, is: true };
const reducer = (state, action) => {
  switch (action.type) {
    case '+':
      return { ...state, num: state.num+action.num };
    case '!':
      return { ...state, is: !state.is };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>num is {state.num}</p>
      <button onClick={() => dispatch({ type: '+', num: 2 })}>+</button>
      <p>toggle is {state.is ? '참' : '거짓'}</p>
      <button onClick={() => dispatch({ type: '!'})}>!</button>

      <ProfileDispatch.Provider value={dispatch}>
        {/* Some Component */}
      </ProfileDispatch.Provider>
    </div>
  );
};

export default UseReducer;