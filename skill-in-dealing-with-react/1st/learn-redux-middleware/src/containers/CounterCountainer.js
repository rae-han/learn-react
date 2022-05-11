import React from 'react';
// import React, { useCallback } from 'react';
import Counter from '../components/Counter'
import { useDispatch, useSelector } from 'react-redux'
// import { increase, decrease } from '../modules/counter'
import { increaseAsync, decreaseAsync } from '../modules/counter'

const CounterContainer = () => {
  const number = useSelector(state => state.counter)
  const dispatch = useDispatch()
  // const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  // const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncrease = () => { dispatch(increaseAsync()); }
  const onDecrease = () => { dispatch(decreaseAsync()); }

  return (
    <div>
      <Counter 
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default CounterContainer;