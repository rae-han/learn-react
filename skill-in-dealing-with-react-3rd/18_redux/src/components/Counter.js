import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseAsync, decreaseAsync } from '../store/counter';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(increaseAsync())}>delay +</button>
      <button onClick={() => dispatch(decreaseAsync())}>delay -</button>
    </div>
  );
};

export default Counter;