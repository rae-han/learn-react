import React, { useCallback, useRef, useState } from 'react';


const EventPractice1 = () => {
  let [currentValue, setCurrentValue] = useState('')
  const [form, setForm] = useState({
    username: '', message: ''
  });
  const { username, message } = form;

  let textInput = useRef();

  const onChange = e => {
    console.log(e);
    console.log(e.target.value);
    let value = e.target.value;
    setCurrentValue(value);
  }

  const SyntheticChange = e => {
    console.log(e);

    setTimeout(() => console.log(e), 100);
  }

  return (
    <div>
      <h1>Event Sample</h1>
      <input 
        type="text" name="message" placeholder="아무거나 입력해 보세요" 
        onChange={onChange}
        ref={textInput}
      />
      {/* <button onClick={() => setCurrentValue(textInput.current.value)}>지금 값은?</button><span>{currentValue}</span> */}
      <div>
        {/* <p>
          <span>Synthetic</span>
          <input onChange={SyntheticChange} />
        </p>
        <p>
          <span>Native</span>
          <input />
        </p> */}
        <input type="text" name="username" value={username} onChange={onChange} />
        <input type="text" name="message" value={message} onChange={onChange} />
      </div>
    </div>
  );
};

export default EventPractice1;