import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from "../reducers";

const configureStore = () => {
  const middleares = [];

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