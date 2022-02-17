# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Tailwind

1. 리액트 프로젝트 생성
먼저 create-react-app 을 이용해서 새로운 리액트 프로젝트를 만들어준다.

npx create-react-app my-project
cd my-project
2. tailwind설치
그런 다음 npm을 이용하여 Tailwind를 설치한다.

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
3. craco
create-react-app은 PostCSS configuration을 기본적으로 오버라이드 할 수 없으므로 Tailwind를 구성하기 위해 craco를 설치해야한다.

npm install @craco/craco
CRACO란 Create React App Configuration Override의 약자로 create-react-app을 위한 configuration layer이다.

- 여기서 에러 나면 react-script 버전을 4로 낮추면 된다.

Craco를 설치한 후 package.json에서 scripts 부분에서 react-scripts 대신 craco를 사용하여 아래와 같이 변경해준다.

{
    // ...
    "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
그리고 프로젝트의 루트에 craco.config.js 파일을 생성하고 아래와 같이 작성한다.

// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
4. tailwind configuration 파일 생성
tailwind.config.js 파일을 생성하기 위해 아래의 명령어를 실행해준다.

npx tailwindcss-cli@latest init
그러면 아래와 같은 파일이 저장된다.

// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
darkMode
media - 유저의 시스템 설정에 따라 자동으로 적용. 즉 내가 Chrome에서 다크모드를 사용하고 있으면 자동으로 다크모드 UI를 보여준다.
class - 시스템 설정에 의존하지 않고 다크모드 토글링을 지원하고 싶다면 사용.

purge
아래와 같이 모든 프로젝트의 template 파일 경로 array를 추가할 것을 권장한다. 그 이유는 production 과정에서 사용하지 않는 스타일들을 자동으로 제거해서 최종 빌드 사이즈를 최적화해주기 때문이다.

purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
5. CSS 파일에 Tailwind 추가하기
이제 create-react-app이 자동으로 생성한 디폴트 파일인 ./src/index.css 파일에 아래와 같이 추가하면 모든 준비가 끝났다.

@tailwind base;
@tailwind components;
@tailwind utilities;



# SASS

node 16 버전 이상에서는 그냥 node-sass 만 설치하면 된다.

# LifeCycle
componentDidMount() - 컴포넌트 첫 랜더링 후 실행할 코드
componentWillUnmount() - 컴포넌트가 사라지기 전 실행할 코드


# useEffect
컴포넌트가 첫 등장해서 로딩이 끝난 후에(mount 끝난 후)
컴포넌트가 재렌더링 되고난 후 때(update 되고 난 후)

두번째 인수인 배열에 값을 넣어주면
컴포넌트가 로드 될때, 해당 값이 변경이 될 때만 실행된다.

만값 배열에 값을 하나도 안넣는다면 컴포넌트 로드할 때 딱 한번만 실행할수 있다.

# 배포

- 뒤에 /shop 처럼 하위 경로에 배포하고 싶다면 package.json 파일에서 큰 object에 homepage라는 key 값을 추가한 후 배포할 사이트 경로를 추가하면 된다.
- ex. "homepage": "https://www.googole.com/shop",
- 만약 리액트 라우터가 설치되어 있다면 라우터가 제공하는 basename="" 속성을 추가하는게 좋다.
  - https://create-react-app.dev/docs/deployment/#building-for-relative-paths

- npm run build or yarn build 명령어를 통해 build or dist 폴더를 말한다.

- github pages 에 배포하는 방법
  1. github 로그인 후 New repository 한다.
  2. 그 후 Repository name 은 왼쪽 Owner 에 있는 아이디.github.io 로 한다 
   - ex. raehan.github.io
  3. README 파일 생성 체크한 뒤 생성
  4. 생성 되었다면 리액트로 생성한 파일을 올린다. build에 있는 파일들을 깃헙에 드래그앤드롭 해도 된다.
  5. 만약 여러 레포지토리를 동시에 호스팅 해주고 싶다면?
     1. 위에서 만든 이름.github.io 를 지우면 안된다.
     2. 레파지토리를 새로 만드는데 이름은 마음대로 해도 된다.
     3. 위 처럼 원하는 HTML, CSS, JS파일 업로드하고 확인 누른다.
     4. repository setting 메뉴에 들어가서 github pages 부분을 찾는다.
     5. source 부분을 None이 아니라 main 같은 걸로 바꾸고 저장한다.
     6. 그 후 아이디.github.io/[repo name]/ 들어가면 확인 가능하다.

# React transition group

- npm install react-transition-group

<CSSTransition in={toggle} classNames="wow" timeout={500}>
<!-- toggle true false 왔다갔다 하면서 트랜지션을 준다. -->
<!-- classNames 는 css에서 쓰일 클래스 이름 -->
  <TabContent category={category} setToggle={setToggle}></TabContent>
  <!-- 
    useEffect(() => {
      setToggle(true)
    });

    useEffect 로 새 컴포넌트로 오면 애니메이션을 준다.
  -->
</CSSTransition>


# Redux

npm i redux react-redux

// index.js
import { Provider } from 'react-redux';

let store = createStore(() => {
  return [{ id: 0, name: '신발', quan: 2 }]
})

<Provider store={store}>
  <App />
</Provider>

// Cart.js
import { connect } from 'react-redux';

function propsfyOfState(state) { ->  redux store 데이터 가져와서 props로 변환해주는 함수
  return {
    thisComponentState: state
  }
}

export default connect(propsfyOfState)(Cart);
-> ()() 는 첫번째 함수에서 함수르 리턴하기 때문. 그냥 라이브러리 문법.

props에 thisComponentState 값이 들어온다.

오늘 총정리를 하자면

- redux는 props 전송 귀찮을 때 사용합니다.

- 일단 redux를 설치부터 하고 셋팅까지 완료합니다.

 

셋팅은

1. index.js에 <Provider>를 import 해오신 다음

2. state 값공유를 원하는 컴포넌트를 감싸면 됩니다.

3. createStore를 import 해오신 다음 사용법에 의해 state를 만들어 let store라는 변수에 저장합니다.

4. <Provider store={store}> 이렇게 store를 등록하면

이제 Provider로 감싼 컴포넌트는 전부 store안에 있던 값을 props없이 공유 가능합니다.

 

 

store안에 있던 state 사용은

원하는 컴포넌트 파일 가셔서

1. 하단에 function state를props화() 를 하나 만들어주고 state를 props로 등록합니다.

2. 그리고 또 하단에 export default connect(state를props화)(Cart); 

이렇게 사용하시면 이제 아까 만들어둔 state가 props로 등록이 된 것입니다. 

props.state이름 이렇게 저장된 state를 자유롭게 사용할 수 있습니다.

// Cart.js

const Cart = (props) => {
  console.log(props.reduxState)
  const loadState = props.reduxState;
  
  ...

   {loadState.map((cart) => (

  ...

  function propsfyOfState(state) {
  return {
    reduxState: state
  }
}

export default connect(propsfyOfState)(Cart); 
 
# 리듀서 초기 세팅
// index.js
function reducer() {
  return [{ id: 0, name: '신발', quan: 2 }]
}

let store = createStore(reducer);

or

let initialState = [{ id: 0, name: '신발', quan: 2 }] // 초기 값

function reducer(state = initialState, action) {
  return state; // 여기에 수정 할 방법을 정의
}

let store = createStore(reducer);

# 리듀서에 데이터 수정방법 정의

// index.js
function reducer(state = initialState, action) {
  if(action.type === 'INCREMENT') {
    console.log('수량증가')
    return state;
  } else {
    return state;
  }
}

// UserComponent.js
<button onClick={() => { props.dispatch({ type: "INCREMENT" })}}>+</button>

# 리듀서가 여러개일때
// index.js 
// 하나 더 정의
let initialAlert = true;
function reducer2(state = initialAlert, action) {
  return state;
}

// redux의 combineReducers 메서드를 이용해 리듀서를 합쳐준다.
// let store = createStore(reducer);
let store = createStore(combineReducers({ reducer, reducer2 }))

// UserComponent
// 수정
function propsfyOfState(state) {
  console.log(state)
  return {
    // reduxState: state,
    reduxState: state.reducer,
    isAlert: state.reducer2
  }
}

// action 추가
// index.js
function reducer2(state = initialAlert, action) {
  if(action.type === "HIDE") {
    return false;
  } else {
    return state;
  }
}

// or

function reducer2(state = initialAlert, action) {
  if(action.type === "HIDE") {
    state = false;
    return state;
  } else {
    return state;
  }
}

// UserComponent
{ props.isAlert }
<button onClick={() => { props.dispatch({ type: 'HIDE' })}}>닫기</button>

# 모든 데이터를 리덕스에 옮길 필요는 없다.

# redux 는 꽤 복잡하다.
### react effector, react recoil 같은 라이브러리도 있다.
### react recoil 은 페북 개발자들이 만드는 것

# 리듀서로 값 보내기
// index.js
function reducer(state = initialState, action) {
  if(action.type === 'INCREMENT') {
    console.log('수량증가')
    return state;
  } else if(action.type === "ADD") {
    console.log(action);
    const newState = state.concat({ id: state.length, name: action.payload.title, quan: 1 })
    return newState;
  } else {
    return state;
  }
}

// UserComponent.js
const Detail = (props) => {

...

<button onClick={() => props.dispatch({ type: 'ADD', payload: item }) }>주문하기</button>

...

function propsfyOfState(state) {
  return {
    // reduxState: state,
    reduxState: state.reducer,
    isAlert: state.reducer2
  }
}

export default connect(propsfyOfState)(Detail);

# redux 사용 이유
1. 모든 컴포넌트가 props 없어도 state 사용 가능
2. state  버그 관리가 용이하다.
  - state는 수정하려면 reducer를 밀 정의해 놔야하는데 범인을 여기에서 쉽게 찾을수 있다.

# useSelecotr
// UserComponent
import { useSelector } from 'react-redux';

let state = useSelector(state => state);
let loadState = state.reducer;
let isAlert = state.reducer2;

{ isAlert === true ? 

// 다시 원래대로
export default Cart;

# useDispatch
// UserComponent
import { useDispatch } from 'react-redux';
let dispatch = useDispatch();

<button onClick={() => { dispatch({ type: "INCREMENT" })}}>+</button>
<button onClick={() => { dispatch({ type: 'HIDE' })}}>닫기</button>

# 리듀서를 더 예쁘게
function reducer(state, 액션){
  
  if (액션.type === '수량증가'){
    return 수량증가된state
  } else if (액션.type === '수량감소'){
    return 수량감소된state
  } else {
    return state
  }
}

function reducer(state, 액션){
  
  switch (액션.type) {
    case '수량증가' :
      return 수량증가된state;
    case '수량감소' : 
      return 수량감소된state;
    default : 
      return state
  }

}

# 여러 컴포넌트중 하나 보여줄 때 오브젝트 자료형을 응용한 enum을 사용하면 좋다.


  const [currentCategory, setCurrentCategory] = useState('info');
  const categories = ['info', 'shipping', 'refund']

  const setRandomComponent = () => {
    setCurrentCategory(categories[Math.floor(Math.random()*3)]);
  }

<p><button onClick={setRandomComponent}>랜덤 컴포넌트 보여주기</button></p>
{
  {
    info: <div>상품정보</div>,
    shipping: <div>배송관련</div>,
    refund: <div>환불약관</div>,
  }[currentCategory] // -> 이걸 그냥 볌수로 분리해도 무방
}

# 리액트 setState 함수 특징
- setTimeout 처럼 비동기적으로실행된다.
- 모았다가 한번에 실행된다.
- 가장 좋은 방법은 useEffect 를 사용하여 특정 state가 변경될 때 useEffect를 실행할 수 있게 한다.

- 예를 들면 count, age 가 useState로 있고 count를 먼저 증가 시킨 후 특정 카운트 이하일때만 age를 실행 시켜주면 특정 카운트가 됐을때 count가 아직 변하지 않는 걸로 읽혀 age가 올라간다.
- ex
setCount(count+1);
if ( count < 3 ) {
  setAge(age+1);
}

useEffect(()=>{
  if ( count < 3 ) {
    setAge(age+1)
  }
 }, [count]) 

// 하지만 useEffect를 위 처럼 써도 첫 페이지 로드될 때 한번 실행되기 때문에 코드를 막아줘야한다. 
// 처음 페이지 로드시 useEffect 실행을 막는 코드를 사용하던가 아래 코드를 사용해도 된다.
useEffect(()=>{
  if ( count != 0 && count < 3 ) {
    setAge(age+1)
  }
 }, [count]) 

// 혹은 count, age를 한 state에 array, object 자료형을 써도 된다.
// 또는 굳이 state로 만들지 않고 일반 변수로..??

1. 함수나 오브젝트는 변수에 담아 쓰는게 좋다.
- 리액트적인 개념은 아니고 그냥 메모리 공간을 아낄 수 있는 JS 코딩 관습

function UserComponent() {
  return (
    <div style={{ color: 'red' }}></div>
  )
}

->

const style = { color: 'red' }; // 컴포넌트 밖에

function UserComponent() {
  return (
    <div style={style}></div>
  )
}

이유는 컴포넌트가 재랜더링될 때 변수에 저장되지 않은 이름없는 object, function 류의 자료형들은 매번 새로운 메모리 영역을 할당해줘야하기 때문에 성능상 불리하다.
만약 class로 만든 컴포넌트는 class 안에 함수 집어넣는 공간에 사용하면 된다.

2. 애니메이션 줄 때 레이아웃 변경 애니메이션은 좋지 않음
windth, height, margin, padding, left, right, top. bottom 같은 값을 자바스크립트나 transition을 이용해 변경시키는건 브라우저 입장에서 부담이 된다. (자세한건 CSS 렌더링 단계를 찾아보자.)
애니메이셔을 넣어도 성능에 큰 지장이 없도록 transform, opacity같은 css속성을 이용한다.
transform은 사이즈 변경, 좌표이동, 회전 전부 가능한 좋은 속성이다.

# lazy loading

// App.js
import React, { lazy, Suspense } from 'react';

const Detail = lazy(() => { return import('./components/Detail') });

<Suspense fallback={ <div>로딩중입니다~!</div> }>
  <Route path="/detail/:id" component={() => (<Detail list={list}></Detail>)}></Route>
</Suspense>




