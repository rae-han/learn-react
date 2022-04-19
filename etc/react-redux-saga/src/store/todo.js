import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

let id = 1;

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = input => ({ type: CHANGE_INPUT, input });
export const insert = text => ({ type: INSERT, todo: {  id: id++, text, done: false} });
export const toggle = id => ({ type: TOGGLE, id });
export const remove = id => ({ type: REMOVE, id });

const initialState = {
  input: '',
  todos: [
    { id: 0, text: 'test text', done: true },
  ]
}

function todo(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }
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

