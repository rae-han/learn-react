import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

const Detail = ({ list }) => {
  let history = useHistory();
  let { id } = useParams();

  const item = list.find(i => i.id === parseInt(id, 10));

  return (
    <div>
      <button>주문하기</button>
      <button onClick={() => history.goBack()}>뒤로가기</button>
      <div className="grid grid-cols-2">
        <img src="https://via.placeholder.com/400" alt="img" />
        <div>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

