##  환경변수
- .env.{환경변수 이름} 으로 선언한 파일을 process.env.{환경 변수 이름} 으로 접근 가능하다.
- npm start -> development
- npm test -> test
- npm run build -> production

## CSS 작성 방법
- 리액트 프로그래밍은 컴포넌트를 중심으로 생각하는게 좋다.
- 컴포넌트 하나를 잘 만들어 여러 곳에 재사용 하는게 좋은데, 그러기 위해서는 각 컴포넌트는 서로 간의 의존성을 최소화하면서 내부적으로는 응집도(cohesion)를 높여야한다.
- 컴포넌트는 화면에 보이는 부분으로 당연히 CSS코드가 필요하고, 응집도를 높이기 위해 컴포넌트 내부에서 CSS 관리하는 방법으로는 css-module, css-in-js 가 있다.

### css-module
CRA에서는 css 파일 이름 접미사에 .module.css 를 사용하면 컴포넌트 단위의 css 모듈이 된다.

## 단일 페이지 애플리케이션
- 리액트 애플리케이션의 페이지 전환은 단일 페이지 애플리케이션(single page applicaiton, SPA)가 정석이다.
- 최초 요청 시 서버에서 첫 페이지를 처리하고 이후의 라우팅은 클라이언트에서 처리한다.