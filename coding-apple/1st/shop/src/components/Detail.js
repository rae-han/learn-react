import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Detail = () => {
  let history = useHistory();

  return (
    <div>
      <button>주문하기</button>
      <button onClick={() => history.goBack()}>뒤로가기</button>
      <div className="grid grid-cols-2">
        <img src="https://via.placeholder.com/400" alt="img" />
        <div>
          <h4>상품명</h4>
          <p>10000원</p>
          <p>주문하기</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;