import { call, delay, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../store/loading';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    console.log(type, action)
    yield put(startLoading(type));

    try {
      console.log(type, action)
      const response = yield call(request, action.payload);
      
      console.log(type, action, response);

      if(type === 'sampleSaga/GET_POST') {
        yield put({
          type: SUCCESS,
          payload: response.data
        })
        return;
      }
      yield put({
        type: SUCCESS,
        payload: response.data
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      });
    }
    yield put(finishLoading(type));
  }
}