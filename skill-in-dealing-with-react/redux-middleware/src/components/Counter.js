import React from 'react';

const Counter = ({ number, onIncrease, onDecrease, onIncreaseAsync, onDecreaseAsync }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncreaseAsync}>+1 Async</button>
        <button onClick={onDecreaseAsync}>-1 Async</button>
      </div>
    </div>
  );
};

export default Counter;