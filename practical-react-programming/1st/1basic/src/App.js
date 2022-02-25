import React from 'react';
import useWindowWidth from './hooks/useWindowWidth'
import useHasMounted from './hooks/useHasMounted'

import PreValueRef from './components/PreValueRef';

function App() {
  const width = useWindowWidth();
  const hasMounted = useHasMounted();

  console.log(hasMounted)

  return (
    <div className="App">
      <div>Window Width: {width}</div>
      <div>Has Mounted: {`${hasMounted}`}</div>

      <PreValueRef></PreValueRef>
    </div>
  );
}

export default App;
