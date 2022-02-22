import React from 'react';

import './Latest.scss'

const Latest = (props) => {
  const { list, latest } = props;

  return (
    <div>
      { latest && <div className="Latest">
        <h3>최근 상품</h3>
        <div>
          {latest.map(idx => <p key={idx}>{list[idx].title}</p>)}
        </div>
      </div>}
    </div>
  );
};

export default Latest;