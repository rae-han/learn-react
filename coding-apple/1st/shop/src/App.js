import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.scss';

import listData from './data'

import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import List from './layouts/List'
import Cart from './components/Cart';
import Parent from './components/Parent';
import Latest from './components/Latest';

// import Detail from './components/Detail';
const Detail = lazy(() => { return import('./components/Detail') });

const countContext = React.createContext(); 
// 같은 값을 공유하는 범위 생성
// createContext라는 함수를 이용해 변수를 만드는데 그 변수는 특별한 컴포넌트가 된다.
// 이 컴포넌트의 value 에 공유할 state를 집어넣으면 된다.
// useContext - 재고 값을 사용 가능

const style = {
  backgroundColor: 'red',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

function App() {
  const [list, setList] = useState(listData);
  const [moreIdx, setMoreIdx] = useState(2);
  const [isMore, setIsMore] = useState(true);
  const [testarea, setTestarea] = useState(true);
  const [testtext, setTesttext] = useState('');
  const [count, setCount] = useState([11, 12, 13]);
  const [name, setName] = useState('이름');
  
  const [currentCategory, setCurrentCategory] = useState('info');
  const categories = ['info', 'shipping', 'refund']
  
  const [latest, setLatest] = useState([1, 2]);

  const setRandomComponent = () => {
    setCurrentCategory(categories[Math.floor(Math.random()*3)]);
  }


  const inputText = e => {
    setTesttext(e.target.value);
  }

  const fetchList = async () => {
    setMoreIdx(moreIdx+1);

    try {
      let res = await axios({
        method: 'GET',
        url: `https://codingapple1.github.io/shop/data${moreIdx}.json`
      })
      setList(list.concat(res.data));
    } catch (error) {
      
    }

    if(moreIdx===3) {
      setIsMore(false);
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => setTestarea(false), 2000);

    return () => {
      console.log('컴포넌트가 사라 진 후 작동')
      clearTimeout(timer);
    }
  }, [])

  useEffect(() => {
    let latest = JSON.parse(localStorage.getItem('latest'));
    setLatest(latest)
  }, [])

  return (
    <div className="App">
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <countContext.Provider value={count}> 
        <Route path="/" exact={true} component={() => <List list={list}></List>}></Route>
        <Suspense fallback={ <div style={style}>로딩중입니다~!</div> }>
          <Route path="/detail/:id" component={() => (<Detail list={list} setLatest={setLatest}></Detail>)}></Route>
        </Suspense>
        <Route path="/cart" component={() => (<Cart></Cart>)}></Route>
      </countContext.Provider>
      {isMore && <button onClick={fetchList}>더보기</button>}
      <input className="testinput" type="text" onChange={inputText} value={testtext}/>
      { testarea && <>
        <div className="test"></div>
        <div className="list"></div>
      </>}
      <div>
        <p><button onClick={setRandomComponent}>랜덤 컴포넌트 보여주기</button></p>
        {
          {
            info: <div>상품정보</div>,
            shipping: <div>배송관련</div>,
            refund: <div>환불약관</div>,
          }[currentCategory]
        }
      </div>
      <Parent name={name} age="20"></Parent>
      <button onClick={() => setName(name + '0')}>이름 추가</button>
      <Latest latest={latest} list={list}></Latest>
    </div>
  );
}

export {
  countContext
}

export default App;
