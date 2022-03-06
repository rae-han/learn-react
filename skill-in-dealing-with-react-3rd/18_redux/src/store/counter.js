import { createAction, handleActions } from 'redux-actions';

const delayTime = 2000;

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, delayTime)
}
export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, delayTime)
}

const initialState = 0;

const counter = handleActions({
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1,
}, initialState);

export default counter;