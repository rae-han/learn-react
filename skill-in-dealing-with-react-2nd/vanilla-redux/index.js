import { createStore } from 'redux';

console.log('hello parcel')

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 타입
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
// type 값은 필수이며 참고하고 싶은 값은 자유
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 함수 정의
// 변화를 일이키는 함수.
// 함수의 파라미터로 state, action 을 받아온다.
// 리듀스 함수가 처음 호출 될 때는 state 값이 undefined이다.
function reducer(state = initialState, action) {
  console.log('Func reducer');

  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + (action.difference || 1)
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

// 스토어 만들기
console.log('Before create store')
const store = createStore(reducer);

// render 함수 만들기
// 리액트의 render와 다르게 이미 html을 사용하여 만들어진 ui의 속성을 상태에 따라 변경
const render = () => {
  console.log('Func render')
  const state = store.getState();

  if(state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
}

render();

// 구독하기
// 스토어의 상태가 바뀔 때마다 render함수가 호출되게 해준다.
// 파라미터로 함수 형태의 값을 준다.
console.log('Before subscribe')
store.subscribe(render);

// 액션 발생 시키기
divToggle.onclick = () => {
  console.log('Action!!')
  store.dispatch(toggleSwitch());
}
btnIncrease.onclick = () => {
  store.dispatch(increase(2));
}
btnDecrease.onclick = () => {
  store.dispatch(decrease());
}

console.log('######## Complete render ########')
