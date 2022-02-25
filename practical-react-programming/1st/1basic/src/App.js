import React from 'react';
import useWindowWidth from './hooks/useWindowWidth'
import useHasMounted from './hooks/useHasMounted'
import useToggle from './hooks/useDebugValueToggle'

import PreValueRef from './components/PreValueRef';
import UseReducer from './components/UseReducer';

function App() {
  const width = useWindowWidth();
  const hasMounted = useHasMounted();
  const [value, onToggle] = useToggle();

  console.log(hasMounted)

  return (
    <div className="App">
      <div>Window Width: {width}</div>
      <div>Has Mounted: {`${hasMounted}`}</div>

      <PreValueRef></PreValueRef>
      <UseReducer></UseReducer>
      <div onClick={onToggle}>{value ? 'true' : 'false'}</div>
    </div>
  );
}

export default App;
