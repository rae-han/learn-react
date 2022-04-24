import React, { useState, useReducer, useCallback } from 'react';
import produce from 'immer'

import HeaderContainer from '../containers/common/HeaderContainer'
import Button from '../components/common/Button'

function numReducer(num, action) {
  switch(action.type) {
    case 'ADD':
      return num+action.num;
    case 'SUB':
      return num-action.num;
    default:
      return num;
  }
}

function PostListPage(props) {
  const [num, dispatch] = useReducer(numReducer, undefined, () => 0);
  const add1 = useCallback(() => dispatch({ type: 'ADD', num: 1 }), [])
  const sub1 = useCallback(() => dispatch({ type: 'SUB', num: 1 }), [])
  const [object, setObject] = useState({
    deps: 0,
    data: {
      deps: 1
    }
  })

  const printObject = () => console.log(object);
  const test = () => {
    const newObject = produce(object, draft => {
      console.log(draft)
      draft.data.deps = 10;
    })

    console.log(newObject)
  }


  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Button>Button</Button>
      <div>
        <div>{num}</div>
        <button onClick={add1}>add</button>
        <button onClick={sub1}>sub</button>
        <button onClick={printObject}>log</button>
        <button onClick={test}>immer</button>
      </div>
    </>
  );
}

export default PostListPage;