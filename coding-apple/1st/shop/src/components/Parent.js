import React, { useEffect, memo } from 'react';

const Parent = (props) => {
  return (
    <div>
      <Child1 name={props.name}></Child1>ㅅㅅ
      <Child2 age={props.age}></Child2>
    </div>
  );
};

const Child1 = (props) => {
  useEffect(() => console.log('Child1 렌더링'));
  
  return <div>1111 {props.name}</div>
}

const Child2 = memo((props) => {
  useEffect(() => console.log('Child2 렌더링'));
  
  return <div>2222 {props.age}</div>
});

export default Parent;