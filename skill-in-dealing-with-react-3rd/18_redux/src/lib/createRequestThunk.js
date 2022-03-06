import { startLoading, finishLoading } from "../store/loading";

export default function createRequestThunk(type, request) {
// export default createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return params => async dispatch => {
    dispatch({ type });
    dispatch(startLoading(type));

    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data
      });
      console.log(type==='sample/GET_POST')
      if(type==='sample/GET_POST') {
        setTimeout(() => {
          dispatch(finishLoading(type));
        }, 2000)
        return;
      }
      dispatch(finishLoading(type));
    } catch (error) {
      console.log(error)
      dispatch({
        type: FAILURE,
        payload: error,
        error: true
      });
      dispatch(startLoading(type));
      throw error;
    }
  }
}