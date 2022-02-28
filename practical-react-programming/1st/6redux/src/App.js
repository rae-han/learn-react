import middleware1 from './lib/redux/middleware1'

import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={() => middleware1.dispatch({ type: 'someAction' })}>의미 없는 액션 일으키기</button>
    </div>
  );
}

export default App;
