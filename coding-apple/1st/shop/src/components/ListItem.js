import React from 'react';
import { useHistory } from 'react-router-dom'

const ListItem = ({item: {id, title, content, price}}) => {
  let history = useHistory();

  return (
    <div onClick={() => history.push(`/detail/${id}`)}>
      <div key={id}>
        <img className="mx-auto" src="https://via.placeholder.com/200" alt="img" />
        <h4>{title}</h4>
        <p>{content}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ListItem;