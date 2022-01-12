import React, { useCallback } from 'react';
import Counter from '../components/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter'


const CounterContainer = () => {
  const number = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const onIncrease = useCallback(()=>dispatch(increase()), [dispatch])
  const onDecrease = useCallback(()=>dispatch(decrease()), [dispatch])
  const onIncreaseAsync = useCallback(()=>dispatch(increaseAsync()), [dispatch])
  const onDecreaseAsync = useCallback(()=>dispatch(decreaseAsync()), [dispatch])

  return (
    <div>
      <Counter 
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseAsync={onIncreaseAsync}
        onDecreaseAsync={onDecreaseAsync}
      />
    </div>
  );
};

export default CounterContainer;