import React, { useState } from 'react';


const MyComponent = () => {
  const [num, setNum] = useState(0);
  const [arr, setArr] = useState([1, 1, 1, 1]);

  const increaseNum = () => {
    setNum(num+1)
  }

  const appendArr1 = () => {
    arr.push(2);
    console.log(arr);
    setArr(arr);
  }  
  const appendArr2 = () => {
    setArr([...arr, 3]);
  }
  const appendArr3 = () => {
    setArr(arr.concat(4));
  }

  const NumberComponent = () => {
    return (
      <div>
        <h3>{num}</h3>
        <button onClick={() => setNum(num+1)}>+1</button>
        <button onClick={increaseNum}>+1</button>
        {/* <button onClick={setNum(num+1)}>+1</button> */}
      </div>
    )
  }

  function ArrayComponent() {
    return (
      <div>
        <h3>{arr}</h3>
        <button onClick={appendArr1}>appendArr</button>
        <button onClick={appendArr2}>appendArr</button>
        <button onClick={appendArr3}>appendArr</button>
      </div>
    )
  }

  return (
    <div>
      <NumberComponent></NumberComponent>
      <ArrayComponent></ArrayComponent>
    </div>
  );
};

export default MyComponent;