// export default function createRequestThunk(type, request) {
export default createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return params => async dispatch => {
    dispatch({ type });

    try {
      const response = await request(parmas);
      dispatch({
        type: SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: FAILURE,
        payload: error,
        error: true
      });
      throw error;
    }
  }
}