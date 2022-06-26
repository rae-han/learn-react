# CSS 서버사이드 렌더링
스타일드컴포넌트 서버사이드 렌더링이 필요함(근데 emotion은 해주는데.. 오류가 안남 뭐지)
babelrc 에 관련 설정을 적어준다. 완전한 해결책은 아니다.
displayName 은 외계어 같은 클래스 네임을 컴포넌트 네임으로 바꿔주는 것 - 보기 편해진다.
그리고 이걸 위해선 babel-plugin-styled-component 도 설치해야한다.
```
// .babelrc
{
  "presets": ["next/babel"],
  "plugins": [
    ["babel-plugin-styled-component", {
      "ssr": true,
      "displayName": true
    }]
  ]
}
```
그 후에 _app.js 의 상위 페이지인 _document.js 에 아래 내용을 추가하면 된다.
```
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```
추가로 polyfill.io 에서 
default와 es 체크한 걸 스크립트로 넣어주면 바벨보다 좀 더 가볍고 좋다.
<script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2Ces2020%2Ces2021%2Ces2022" />
이건 body start 태그와 Main 컴포넌트 사이에 넣어주면 된다.