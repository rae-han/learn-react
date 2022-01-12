import React, { useState, useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  let [text, setText] = useState('')

  let onChange = useCallback(e => {
    let value = e.target.value
    setText(value)
  }, [])

  let inputEl = useRef(null)
  let onSubmit = useCallback(e => {
    onInsert(text);
    setText('');
    inputEl.current.focus();
    e.preventDefault();
  }, [onInsert, text])


  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={onChange}
        ref={inputEl}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
