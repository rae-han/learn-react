import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value+1 }
    case 'DECREMENT':
      return { value: state.value-1 }
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 })

  return (
    <div>
      <p>counter: {state.value}</p>
      <button onClick={()=>{dispatch({ type: 'INCREMENT' })}}>+</button>
      <button onClick={()=>{dispatch({ type: 'DECREMENT' })}}>-</button>
    </div>
  );
};

export default Counter;