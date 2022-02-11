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

 









