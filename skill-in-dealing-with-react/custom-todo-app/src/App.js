import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const createBulkTodos = () => {
  const array = [];
  for(let i=1; i<=2; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false
    })
  }

  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  let nextId = useRef(todos.length+1);

  let onInsert = useCallback(text => {
    console.log('onInsert1')
    setTodos(todos => todos.concat({
      id: nextId.current,
      text,
      checked: false
    }))

    // setTodos(todos.concat({
    //   id: nextId.current,
    //   text,
    //   checked: false
    // }))

    nextId.current++;
  }, [])

  // let onInsert = text => {
  //   console.log('onInsert2')

  //   setTodos(todos.concat({
  //     id: nextId.current,
  //     text,
  //     checked: false
  //   }))

  //   nextId.current++;
  // }

  let onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }, [])

  let onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
    </TodoTemplate>
  );
};

export default App;
