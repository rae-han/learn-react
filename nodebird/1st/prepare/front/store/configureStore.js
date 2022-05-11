import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from "../reducers";

const loggerMiddleware = ({ dispatch, getState }) => next => action => {
  // if(typeof action === 'function') { // action은 객체이지만 thunk 함수일 경우 지연함수이기 때문에 나중에 실행지켜준다.
  //   return action(dispatch, getState, extraArgument);
  // })
  console.log('action', action); // 액션 실행 전에 뭔지 알려주는 미들웨어.
  return next(action);
}

const configureStore = () => {
  const middleares = [thunkMiddleware, loggerMiddleware];

  // const enhancer = process.env.NODE_ENV === 'production'
  //   ? compose(applyMiddleware([]))
  //   : composeWithDevTools(applyMiddleware([])); 
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleares))
    : composeWithDevTools(applyMiddleware(...middleares)); 

  const store = createStore(rootReducer, enhancer);
  // store.dispatch({
  //   type: 'CHANGE_NAME',
  //   name: 'hanrae'
  // })
  return store;
};

const wrapper = createWrapper(configureStore, { 
  debug: process.env.NODE_ENV === 'development' 
});

export default wrapper;