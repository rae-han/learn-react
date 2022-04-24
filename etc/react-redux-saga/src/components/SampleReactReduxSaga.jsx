import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeInput, insert, toggle, remove, fetch } from '../store/todo';

const listStyle = {
  
}

const SampleReactReduxSaga = () => {
  const dispatch = useDispatch();
  const { todoInput, todos } = useSelector(({ todo }) => ({
    todoInput: todo.input,
    todos: todo.todos,
  }))

  const handleChangeInput = e => dispatch(changeInput(e.target.value));

  const handleEnterInput = e => {
    // console.log(e.key)
    // console.log(e.nativeEvent.isComposing)
    if(e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      insertTodo();
      dispatch(changeInput(''))
    }
    
  }

  const insertTodo = () => {
    dispatch(insert(todoInput));
    dispatch(changeInput(''));
  }

  const toggleTodo = id => {
    dispatch(toggle(id));
  }

  const removeTodo = id => {
    dispatch(remove(id));
  }

  useEffect(() => {
    dispatch(fetch());
  }, [])

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <form onSubmit={e => e.preventDefault()} onKeyP>
          <input type="text" value={todoInput} onChange={handleChangeInput} onKeyDown={handleEnterInput}/>
          <button>++</button>
        </form>
      </div>
      <ul>
        { todos.map(todo => (<li 
          key={todo.id} style={{ listStyle: 'none', textDecoration: todo.done ? 'red wavy line-through' : '' }}
          onClick={() => toggleTodo(todo.id)}
        >
          <span>{todo.text}</span>
          <button onClick={() => removeTodo(todo.id)}>--</button>
        </li>)) }
      </ul>
    </div>
  );
};

export default SampleReactReduxSaga;