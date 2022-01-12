import { useState } from 'react';
import Counter from './components/Counter'
import Info from './components/Info'
import Average from './components/Average'

function App() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="App">
      <Counter />
      <button
        onClick={()=>{setVisible(!visible)}}
      >{ visible ? '숨기기' : '보이기' }</button>
      { visible && <Info /> }
      <Average />
    </div>
  );
}

export default App;
