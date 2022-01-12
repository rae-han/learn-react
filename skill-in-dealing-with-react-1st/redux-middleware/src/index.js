import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer, { rootSaga } from './modules'
// import loggerMiddleware from './libs/middlewares/customLogger'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { Router, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger({ collapsed: true })
const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));
const store = createStore(rootReducer, applyMiddleware(
  ReduxThunk.withExtraArgument({ history: customHistory }),
  sagaMiddleware, 
  logger
));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Router history={customHistory}>
  {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
