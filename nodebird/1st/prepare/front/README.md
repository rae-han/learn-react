react 에서 태그 안에 style 속성을 이용해서 스타일 객체를 정의하면 안좋다.
왜냐면 자바스크립트에서는 {} === {} 는 false  이고
버추얼 돔으로 검사하면 인라인 스타일 부분에 있는 객체가 다르다고 판단하고 리렌더링 해버린다.
이럴때 사용하는게 styled component, @emotion/styled 와 같은 라이브러리.
but 집찰할 정도의 성능 향상은 아니다.

useCallback 은 함수를 캐싱, useMemo 는 값을 캐싱
즉 useMemo 로도 캐싱 가능하다.

함수형 컴포넌트에서 리렌더링 할때 함수 안 부분이 처음부터 끝까지 다시 실행되는것은 맞다.
useCallback, useMemo 같은 것은 캐싱이니 두번째 인자인 배열 안의 값이 바뀌지 않는 이상 같은 것으로 쳐주는데
return 안에서 바뀐 부분이 있다면 리턴 전체를 다시 그리는 것이 아니라 그 안에서도 바뀐 부분만 다시 그린다.

리액트에서 한번은 화면에 그려주고
리랜더링 됐을때 이전 컴포넌트와 지금 컴포넌트의 버추얼 돔을 비교하고 버추얼 돔에서 바뀐 부분을 리액트에 알려주고
그 부분만 다시 그린다.

### <a href="https://github/rae-han" target="_blank" rel="noreferrer noopener" ></a>


http://www.xgif.cc/gif/severallankyblackfish/