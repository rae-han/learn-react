import React from 'react';
import useWindowWidth from './hooks/useWindowWidth'
import useHasMounted from './hooks/useHasMounted'

function App() {
  const width = useWindowWidth();
  const hasMounted = useHasMounted();

  console.log(hasMounted)

  return (
    <div className="App">
      <div>Window Width: {width}</div>
      <div>Has Mounted: {`${hasMounted}`}</div>
    </div>
  );
}

export default App;
