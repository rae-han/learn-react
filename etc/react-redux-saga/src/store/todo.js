import { call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as todoAPI from '../api/todo';

const createActionType = type => ([type, `${type}_SUCCESS`, `${type}_FAILURE`]);

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const FETCH = 'todo/FETCH'
const FETCH_SUCCESS = 'todo/FETCH_SUCCESS'
const FETCH_FAILURE = 'todo/FETCH_FAILURE'
const [INSERT, INSERT_SUCCESS, INSERT_FAILURE] = createActionType('todo/INSERT')
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = input => ({ type: CHANGE_INPUT, input });
export const fetch = () => ({ type: FETCH })
export const insert = text => ({ type: INSERT, text });
export const toggle = id => ({ type: TOGGLE, id });
export const remove = id => ({ type: REMOVE, id });

const fetchTodoSaga = function*(action) {
  console.log(action);

  try {
    const response = yield call(todoAPI.listTodo);
    console.log(response)

    yield put({
      type: FETCH_SUCCESS,
      payload: response.data
    })

    console.log('call', call(todoAPI.listTodo));
    console.log('put',  put({type: FETCH_SUCCESS, payload: response.data}));
    console.log('takeLatest', takeLatest(FETCH, fetchTodoSaga))
    console.log('takeEvery', takeEvery(INSERT, insertTodoSaga))
    console.log('fork', fork(INSERT, insertTodoSaga))
  } catch (error) {
    yield put({
      type: FETCH_FAILURE,
      payload: error,
      error: true
    })
  }
}

const insertTodoSaga = function*(action) {
  console.log(action);

  try {
    const response = yield call(todoAPI.insert, { text: action.text }, 1, 2);
    console.log(response);

    yield put({
      type: INSERT_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: INSERT_FAILURE,
      payload: error,
      error: true
    })
  }
}

const test = () => {
  return 'test';
}

console.log('c1', call(test, 1));
console.log('c2', call(test, 1, 2));
console.log('c3', call(test, [1, 2]));
console.log('c4', call(test, { a: 1, b: 2}));

export function* todoSaga() {
  yield takeLatest(FETCH, fetchTodoSaga);
  yield takeEvery(INSERT, insertTodoSaga);
}

const initialState = {
  input: '',
  todos: [
    { id: 0, text: 'test text', done: true },
  ],
  todosError: null,
}

function todo(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }
    case FETCH:
      console.log(action)
      return state;
    case FETCH_SUCCESS:
      console.log(action)
      return {
        ...state,
        todos: action.payload
      };
    case FETCH_FAILURE:
      console.log(action);
      return state;
    case INSERT:
      console.log(action)
      return {
        ...state,
        // todos: state.todos.concat(action.todo)
      }
    case INSERT_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        todos: action.payload
      }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state;
  }
}

export default todo;

