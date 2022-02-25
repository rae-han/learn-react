import React, { useState, useRef, useEffect } from 'react';

const PreValueRef = () => {
  const [age, setAge] = useState(20);
  const preAgeRef = useRef(20);

  useEffect(() => {
    preAgeRef.current = age;
  }, [age]);

  const preAge = preAgeRef.current;
  const text = age === preAge ? 'same' : age > preAge ? 'older' : 'younger';

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${preAge}`}</p>
      <button onClick={() => {
        const age = Math.floor(Math.random() * 5 + 1);
        setAge(age);
      }}>Random Age</button>
    </div>
  );
};

export default PreValueRef;