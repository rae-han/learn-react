import React, { useEffect, useRef } from 'react';
import { useStore } from 'react-redux';

console.log('Components/Todos')

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" 
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      >{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  let textInput = useRef(null)

  const onSubmit = e => {
    e.preventDefault();

    if(input==='') { // useSelector를 이용해 가져온 값
      onChangeInput('blank') // store에 input을 바꾸는 함수
      console.log(1, input)
      // onInsert('blank')
      // return;
    }
    console.log(6, textInput.current.value)    
    console.log(2, input)

    onInsert(input);
    // onChangeInput('');
    textInput.current.focus();
  }

  const onChange = e => onChangeInput(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} ref={textInput} />
        <button type="submit">등록</button>
      </form>
      <div>{todos.map(todo => (
        <TodoItem 
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}</div>
    </div>
  )
}

export default Todos;