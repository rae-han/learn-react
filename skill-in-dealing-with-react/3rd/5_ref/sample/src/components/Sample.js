import React, { useRef } from 'react';

const Sample = () => {
  const ref = useRef();
  const logRef = () => {
    console.log(ref.current)
  }

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={logRef}>확인 </button>
    </div>
  );
};

export default Sample;