import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let initialState = [{ id: 0, name: '신발', quan: 2 }]

function reducer(state = initialState, action) {
  if(action.type === 'INCREMENT') {
    console.log('수량증가')
    return state;
  } else if(action.type === "ADD") {
    console.log(action);
    const newState = state.concat({ id: state.length, name: action.payload.title, quan: 1 })
    return newState;
  } else {
    return state;
  }
}

let initialAlert = true;
function reducer2(state = initialAlert, action) {
  if(action.type === "HIDE") {
    state = false;
    return state;
  } else {
    return state;
  }
}

// let store = createStore(reducer);
let store = createStore(combineReducers({ reducer, reducer2 }))



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
