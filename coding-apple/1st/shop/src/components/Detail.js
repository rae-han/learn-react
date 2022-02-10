import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Detail.scss';

const Detail = ({ list }) => {
  let history = useHistory();
  let { id } = useParams();
  let [category, setCategory] = useState(1);
  let [toggle, setToggle] = useState(false);

  const item = list.find(i => i.id === parseInt(id, 10));

  const toggleCategory = id => {
    setToggle(false);
    setCategory(id);
  }

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
      <div>
        <div>
          <button onClick={() => toggleCategory(1)}>first</button>
          <button onClick={() => toggleCategory(2)}>second</button>
          <button onClick={() => toggleCategory(3)}>third</button>
        </div>
        <div>
          <CSSTransition in={toggle} classNames="wow" timeout={500}>
            <TabContent category={category} setToggle={setToggle}></TabContent>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

function TabContent({ category, setToggle }) {
  useEffect(() => {
    setToggle(true)
  });

  return(
    <div style={{ backgroundColor: 'green' }}>
      { category === 1 && 1111 }
      { category === 2 && 2222 }
      { category === 3 && 3333 }
    </div>
  )
}

export default Detail;

