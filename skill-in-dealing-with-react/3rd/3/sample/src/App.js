import AppFunction from './AppFunction';
import AppClass from './AppClass';

import MyComponentFunc1 from './components/MyComponentFunc1';
import MyComponentFunc2 from './components/MyComponentFunc2';

import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

import MyComponent1 from './components/MyComponent1'

function App() {
  return (
    <div className="App">
      <AppFunction></AppFunction>
      <AppClass></AppClass>
      {/* 
        # 함수형 컴포넌트를 클래스형 컴포넌트와 비교했을 때 차이
          - 선언이 편하다
          - 메모리 자원을 덜 사용한다
          - 빌드 후 결과물의 크기가 더 작다
          ! but 성능과 파일 크기 면에서 사실상 큰 차이는 없다.
          - state와 라이플사이클 API의 사용이 불가능 하지만 Hooks를 통해 해결 가능하다(완전히 같진 않다)
      */}
      {/* 1. name */} 
      {/* 5. children */}
      <MyComponentFunc1 name={"이름"}>자식으로 넘기기</MyComponentFunc1>
      <MyComponentFunc2 name="이름">자식으로 넘기기</MyComponentFunc2>
      <MyComponentFunc2></MyComponentFunc2>

      <Counter1></Counter1>
      <Counter2></Counter2>
      <Counter3></Counter3>

      <MyComponent1></MyComponent1>
    </div>
  );
}

export default App;
