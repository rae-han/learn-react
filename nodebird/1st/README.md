next에서 pages폴더 안의 컴포넌트는 항상 페이지 컴포넌트로 만들어진다.
자동으로 코드 스플리팅을 해준다.

dev 모드일때(npm run next)일때는 link태그를 걸었을때 조금 로딩이 있을수 있다.
배포모드일때는 딜레이가 없어진다.

```
npm i eslint -D
npm i eslint-plugin-import -D
npm i eslint-plugin-react -D
npm i eslint-plugin-react-hooks -D
```

```
// /.eslintrc
{
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "import",
    "react-hooks"
  ],
  "rules": {

  }
}
```

개발의 효율성을 위해서 모바일부터 디자인 하는게 좋다.
그렇게 하지 않으면 브레이크 포인트 설정이 어려워진다.

xs 모바일
sm 테블릿
md 작은 데스크탑
