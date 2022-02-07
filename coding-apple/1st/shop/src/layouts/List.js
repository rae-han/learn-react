import React from 'react';

import ListItem from '../components/ListItem'

const List = ({ list }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.map((item, idx) => <ListItem item={item} key={idx}></ListItem>)}
      </div>
    </div>
  );
};

export default List;

/*
- export default
  파일에서 값을 export 하고 싶을때 export default [원하는 값] 으로 가능하다.
  파일마다 export default는 하나만 사용해야한다.
  export로 여러개를 내보낼수도 있다.

- import
  export 로 내보낸 값을 사용하고 싶다면 import로 사용 가능하다.
*/