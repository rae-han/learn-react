import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({todo, onToggle, onRemove, style }) => {
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <span onClick={() => onToggle(todo.id)}>
          { todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
          <span>{todo.text}</span>
        </span>

        <div className="remove" onClick={() => { onRemove(todo.id) }}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
