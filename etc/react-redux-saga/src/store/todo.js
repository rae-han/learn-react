import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as todoAPI from '../api/todo';

let id = 1;

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const FETCH = 'todo/FETCH'
const FETCH_SUCCESS = 'todo/FETCH_SUCCESS'
const FETCH_FAILURE = 'todo/FETCH_FAILURE'
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = input => ({ type: CHANGE_INPUT, input });
export const fetch = () => ({ type: FETCH })
export const insert = text => ({ type: INSERT, todo: {  id: id++, text, done: false} });
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
  } catch (error) {
    yield put({
      type: FETCH_FAILURE,
      payload: error,
      error: true
    })
  }
}

export function* todoSaga() {
  yield takeLatest(FETCH, fetchTodoSaga);
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
      console.log(action);
      return state;
    case FETCH_FAILURE:
      console.log(action);
      return state;
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
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

