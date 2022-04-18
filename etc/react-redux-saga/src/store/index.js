import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';

// import loading from "./loading";
// import todo, { todoSaga } from './todo';
import todo from './todo';

const rootReducer = combineReducers({
  // loading,
  todo,
});

// export function* rootSaga() {
//   yield all([todoSaga(),]);
// }

export default rootReducer;