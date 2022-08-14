# install
## eslint prettier 설정
npm i react react-dom
npm i typescript @types/react @types/react-dom
npm i -D eslint
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
-prettier는 코드 정렬 도구, eslint는 코드 검사 도구, prettier를 따르지 않는 코드에 경고를 띄어준다.

## ts 설정
ts -> babel -> js 로 해주는 이유
image, css, html 모드 바벨이 js로 바꿔준다. 타입스크립트로 다 처리하는게 아닌 타입스크립트가 바벨로 넘겨주고 최종적으로 처리하게 한다.

## babel 설정
webpack.config.ts // js와 1:1로 안바뀌는게 있다.
npm i -D webpack @babel/core babel-loader @babel/preset-env @babel/preset-react 
### 타입스크립트를 위해서 설치하는 것
npm i -D @types/webpack @types/node @babel/preset-typescript
npm i style-loader css-loader

## index.html이 결국 가장 중요하다.
사용자, 검색엔진이 가장 먼저 보는건 결국 html
핵심 css는 index.html에 사용자 경험이 덜 중요한 css는 자바스크립트로 처리.

## 설정 다 하고
webpack or npx webpack 
하지만 webpack 이 webpack.config.ts를 인식하게 하려면 몇가지 작업을 더 해줘야 한다.
tsconfig-for-webpack-config.json // 웹펙 공식 문서에 어떻게 연동하는지 나와있다.
js 사용자는 그냥
webpack
ts 사용자는
TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack
근데 실행이 안된다? npx때문인가.. 그냥 package scripts에 넣자.
근데 또 실행이 안된다? 윈도우에서는 앞에 cross-env를 넣어주자.
??
```
CLI for webpack must be installed.
  webpack-cli (https://github.com/webpack/webpack-cli)

We will use "npm" to install the CLI via "npm install -D webpack-cli".
Do you want to install 'webpack-cli' (yes/no):
```

npm i ts-node

---

npm i react-refresh