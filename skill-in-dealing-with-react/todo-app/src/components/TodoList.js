import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized'
import './TodoList.scss';

const TodoList = ({ todos, onToggle, onRemove }) => {
  const rowRenderer = useCallback(({index, key, style}) => {
    const todo = todos[index];

    return (
      <TodoListItem
        key={key}
        todo={todo}
        onToggle={onToggle}
        onRemove={onRemove}
        style={style}
      />
    )
  }, [onRemove, onToggle, todos],)

  
  return (
    // <div className="TodoList">
    //   {todos.map(todo => 
    //   <TodoListItem
    //     key={todo.id}
    //     todo={todo}
    //     onToggle={onToggle}
    //     onRemove={onRemove}
    //   />)}
    // </div>
    <List 
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
