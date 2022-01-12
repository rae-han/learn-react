import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '.../libs/api'

const GET_TODOS = 'sample/GET_TODOS'

export const getTodos = createAction(GET_TODOS);

const getTodoSaga = createRequestSaga()