// export const createPromiseThunk = (type, promiseCreator) => {
//   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

import { call, put } from "redux-saga/effects";

//   return param => async dispatch => {
//     dispatch({type, param});

//     try {
//       const payload = await promiseCreator(param);
//       dispatch({ type: SUCCESS, payload })
//     } catch(error) {
//       dispatch({ type: ERROR, payload: error, error: true })
//     }
//   };
// };

// const defaultIdSelecctor = param => param;

// export const createPromiseThunkById = (type, promiseCreator, idSelector = defaultIdSelecctor) => {
//   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

//   return param => async dispatch => {
//     console.log(param)
//     const id = idSelector(param);
//     dispatch({ type, meta: id });
//     try {
//       const payload = await promiseCreator(param);
//       dispatch({ type: SUCCESS, payload, meta: id });
//     } catch (e) {
//       dispatch({ type: ERROR, error: true, payload: e, meta: id });
//     }
//   };
// }

export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* saga(action) {
    try {
      const payload = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload })
    } catch(e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  }
}

// // 특정 id의 데이터를 조회하는 용도로 사용하는 사가
// // API를 호출 할 때 파라미터는 action.payload를 넣고,
// // id 값을 action.meta로 설정합니다.

export const createPromiseSagaById = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* saga(action) {
    const id = action.meta;

    try {
      const payload = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload, meta: id });
    } catch(e) {
      yield put({ type: ERROR, error: e, meta: id })
    }
  }
}

export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  success: payload => ({
    loading: false,
    data: payload,
    error: null
  }),
  error: error => ({
    loading: false,
    data: null,
    error: error
  })
}

export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          // [key]: reducerUtils.loading()
          [key]: reducerUtils.loading(keepData ? state[key].data : null)
        }
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        }
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload)
        }
      default:
        return state;
    }
  }
}

export const handleAsyncActionsById = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    const id = action.meta;

    switch (action.type) {
      case type:
        return {
          ...state,
          // [key]: reducerUtils.loading()
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(keepData ? state[key][id]?.data : null )
          }
        }
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload)
          }
        }
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload)
          }
        }
      default:
        return state;
    }
  }
}