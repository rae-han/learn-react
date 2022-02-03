import React from 'react';


const ListItem = ({item: {id, title, content, price}}) => {
  return (
    <div>
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