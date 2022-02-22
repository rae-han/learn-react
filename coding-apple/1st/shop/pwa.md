나의 PWA를 커스터마이징하려면

 

지금 PWA 발행이 쉽고 간단한 이유는 구글의 workbox 라는 라이브러리 덕분입니다.

이게 create-react-app 설치할 때 함께 설치되었기 때문입니다.

그래서 PWA 발행방식 같은걸 커스터마이징 하고싶으면 workbox 사용법을 익히셔야하는데

구글 직원들이 써놓은 개발문서 같은거 보면 매우 불친절하고 어렵습니다. 

 

그래서 빠르게 커스터마이징 방법 하나만 알려드리겠습니다. 

Q. 하드에 설치할 파일 중에 HTML을 제외하고 싶다면?

이런 경우 많습니다. HTML 파일은 너무 자주 변해서 하드에 저장해놓기 싫다면 여길 수정하시면 됩니다.

(근데 그럴거면 앱실행시 아무것도 안뜰꺼고 모바일 앱의 장점이 사라지는데얌)

 

 

여러분 프로젝트 폴더 내의 

node_modules/react-scripts/config/webpack.config.js 파일을 찾으시면 됩니다. 

거기 하단 쯤에 보면 이런 코드가 있습니다. 

 

new WorkboxWebpackPlugin.GenerateSW({
    clientsClaim: true,
    exclude: [/\.map$/, /asset-manifest\.json$/],
}) 
(▲구버전)

new WorkboxWebpackPlugin.InjectManifest({
    swSrc,
    dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
    exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/], 
(▲신버전)

 

 

여기의 exclude라는 항목이 어떤 파일을 캐싱하지 않을건지 결정하는 부분입니다.

정규식으로 작성하는데 정규식과 일치하는 파일명을 제외합니다. 

그래서 원하는 HTML 파일을 여기 등록하시면 끝입니다.

 

 

new WorkboxWebpackPlugin.GenerateSW({
    clientsClaim: true,
    exclude: [/\.map$/, /asset-manifest\.json$/, /index\.html/],
}) 
이거 말고도 "모든 .css로 끝나는 파일"  "a라는 글자로 시작하는 파일"

이런 식으로 정규식으로 작성할 수도 있는데 그것은 정규식 문법을 잘 찾아보시면 되겠습니다.

근데 여러분 사이트가 페이스북, 인스타, 유튜브처럼 입장과 동시에 Ajax로 초기데이터들을 전부 받아오는 사이트라면

굳이 HTML 파일을 저렇게 할 필요는 없겠죠? 맞습니다. 쓸데없습니다. 

 

 

 

아무튼 위처럼 코드를 추가하면 build 할 때 index.html 파일을 캐싱목록에서 제외해주게 됩니다.

오늘도 service-worker 쉽게 만들어주는 구글신님께 감사인사를 올리도록 합시다. 

참고로 PWA는 구글 앱스토어에 올릴 수 있는 apk 파일로 변환할 수도 있는데 

PWAbuilder 등을 이용하시면 됩니다. 

