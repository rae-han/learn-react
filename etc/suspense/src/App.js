import React, { Suspense } from 'react';
import './App.css';

import User from "./components/User";
import SuspenseUser from "./suspense/User";
import fetchData from "./suspense/fetchData";

function App() {
  return (
    <div className="App">
      <div className="half">
        <User userId={1}></User>
      </div>
      <div className="half">
        <Suspense fallback={<div>loading...</div>}>
          <SuspenseUser resource={fetchData(1)}></SuspenseUser>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
