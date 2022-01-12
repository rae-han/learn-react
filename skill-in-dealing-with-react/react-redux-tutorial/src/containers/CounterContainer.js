import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number)
  const dispatch = useDispatch()
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])

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

// const mapStateToProps = state => ({
//   number: state.counter.number,
// })

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     console.log('inc')
//   },
//   decrease: () => {
//     console.log('dec')
//   }
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer)

export default CounterContainer;