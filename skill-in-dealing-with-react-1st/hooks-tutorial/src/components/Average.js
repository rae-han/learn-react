import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('Calculating the average value..');
  if(numbers.length===0) return 0;
  const sum = numbers.reduce((a,b) => a+b);
  return sum/numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState([]);
  const target = useRef(null);

  const onChange = useCallback(e => {
    console.log('func onChange')
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    console.log('func onInsert')
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    target.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(()=>getAverage(list), [list])

  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={target}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>average: {avg}</div>
    </div>
  );
};

export default Average;