import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'

import { countContext } from '../App.js';

const ListItem = ({item: {id, title, content, price}}) => {
  let history = useHistory();
  let count = useContext(countContext)

  return (
    <div onClick={() => history.push(`/detail/${id}`)}>
      <div key={id}>
        <img className="mx-auto" src="https://via.placeholder.com/200" alt="img" />
        <h4>{title}</h4>
        <p>{content}</p>
        <p>{price}</p>
        <p>{count[id%3]}</p>
      </div>
    </div>
  );
};

export default ListItem;