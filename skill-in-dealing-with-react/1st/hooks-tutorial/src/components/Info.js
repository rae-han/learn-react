import React from 'react';
import useInputs from '../Hooks/useInputs'

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  
  let { name, nickname } = state;

  return (
    <div>
      <input type="text" name="name" value={name} onChange={onChange}/>
      <input type="text" name="nickname" value={nickname} onChange={onChange}/>
      <div>name: {name}</div>
      <div>nickname: {nickname}</div>
    </div>
  );
};

export default Info;