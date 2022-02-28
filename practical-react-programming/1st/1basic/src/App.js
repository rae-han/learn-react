import React, { useState } from 'react';
import useWindowWidth from './hooks/useWindowWidth'
import useHasMounted from './hooks/useHasMounted'
import useToggle from './hooks/useDebugValueToggle'
import useDebounce from './hooks/useDebounce';

import PreValueRef from './components/PreValueRef';
import UseReducer from './components/UseReducer';

function App() {
  const width = useWindowWidth();
  const hasMounted = useHasMounted();
  const [value, onToggle] = useToggle();

  const [count, setCount] = useState(0);
  const [countTemp, setCountTemp] = useState(0);

  useDebounce({
    cb: () => setCount(countTemp),
    ms: 1000,
    args: [countTemp]
  })

  const onDebounce = () => {
    console.log(1, countTemp);
    setCountTemp(countTemp+2)
    console.log(2, countTemp);

  }

  return (
    <div className="App">
      <div>Window Width: {width}</div>
      <div>Has Mounted: {`${hasMounted}`}</div>

      <PreValueRef></PreValueRef>
      <UseReducer></UseReducer>
      <div onClick={onToggle}>{value ? 'true' : 'false'}</div>

      <button onClick={onDebounce} >{count}</button>
    </div>
  );
}

export default App;
