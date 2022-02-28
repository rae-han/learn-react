import { createStore, applyMiddleware } from 'redux';

const middleware1 = store => next => action => {
  console.log('middleware1 start');
  
  const result = next(action);

  console.log('middleware1 end');

  return result;
}

const middleware2 = stroe => next => action => {
  console.log('middleware2 start');

  const result = next(action);
  
  console.log('middleware2 end');

  return result;
}

const myReducer = (state, action) => {
  console.log('my reducer'); // 아무 일도 하지 않는다.
  return state;
};

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({ type: 'someAction '});

export default store;