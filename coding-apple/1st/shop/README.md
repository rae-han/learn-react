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