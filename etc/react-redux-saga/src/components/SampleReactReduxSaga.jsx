import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeInput, insert, toggle, remove } from '../store/todo';

const SampleReactReduxSaga = () => {
  const dispatch = useDispatch();
  const { todoInput } = useSelector(({ todo }) => ({
    todoInput: todo.input
  }))

  const handleChangeInput = e => dispatch(changeInput(e.target.value));

  const handleEnterInput = e => {
    if(e.key === 'Enter') {
      e.preventDefault();
      insertTodo();
    }
  }

  const insertTodo = () => {
    dispatch(insert(todoInput));
    dispatch(changeInput(''));
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <form action="">
          <input type="text" value={todoInput} onChange={handleChangeInput} onKeyDown={handleEnterInput}/>
          <button>++</button>
        </form>
      </div>
      <ul>
        <li><span>asdf</span><button>--</button></li>
      </ul>
    </div>
  );
};

export default SampleReactReduxSaga;