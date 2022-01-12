import { createStore } from 'redux';

console.log('hello parcel')

// DOM 레퍼런스
const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('.counter')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

// console.log(divToggle, counter, btnIncrease, btnDecrease)

// 액션 타입? 이름? 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = defference => ({ type: INCREASE, defference })
const decrease = () => ({ type: DECREASE })

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0
}

// 리듀서 함수 정의
let reducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.defference
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter -1
      }
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
  const state = store.getState(); // 현재 상태를 불러온다.

  if(state.toggle) {
    divToggle.textContent = "toggle on"
  } else {
    divToggle.textContent = "toggle off"
  }

  counter.innerText = state.counter;
}

render();
store.subscribe(render);

// 액션 발생시키기
divToggle.onclick = () => {
  store.dispatch(toggleSwitch())
}

btnIncrease.onclick = () => {
  store.dispatch(increase(2))
}

btnDecrease.onclick = () => {
  store.dispatch(decrease())
}