import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppLayout from "../components/AppLayout";

import { addTodoAction, toggleTodoAction } from '../reducers/todo';

function Test() {
  const dispatch = useDispatch();
  const todoItemStyle = useMemo(() => ({
    textDecoration: 'line-through'
  }), [])
  const { todos } = useSelector(({ todo }) => ({
    todos: todo.todos
  }))
  const [todoInput, setTodoInput] = useState('')

  const submitTodo = e => {
    e.preventDefault();
    
    if(todoInput === '') return;

    dispatch(addTodoAction(todoInput));
    setTodoInput('');
  }
  const toggleTodo = id => {
    console.log(id)
    dispatch(toggleTodoAction(id));
  }

  return (
    <AppLayout>
      <div>test page</div>
      <div>
        <form onSubmit={submitTodo}>
          <input type="text" value={todoInput} onChange={e => setTodoInput(e.target.value)} />
        </form>
      </div>
      <div>
        { todos && todos.map(todo => (
          <div 
            key={todo.id} style={todo.done ? todoItemStyle : null}
            onClick={() => toggleTodo(todo.id)}
          >{ todo.text }</div>)
        )}
      </div>
    </AppLayout>
  );
}

export default Test;