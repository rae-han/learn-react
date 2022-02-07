import { useEffect, useState } from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.scss';

import listData from './data'

import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import List from './layouts/List'
import Detail from './components/Detail'

function App() {
  const [list, setList] = useState(listData);
  const [moreIdx, setMoreIdx] = useState(2);
  const [isMore, setIsMore] = useState(true);
  const [testarea, setTestarea] = useState(true);
  const [testtext, setTesttext] = useState('');


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

  return (
    <div className="App">
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <Route path="/" exact={true} component={() => <List list={list}></List>}></Route>
      <Route path="/detail/:id" component={() => (<Detail list={list}></Detail>)}></Route>
      {isMore && <button onClick={fetchList}>더보기</button>}
      <input className="testinput" type="text" onChange={inputText} value={testtext}/>
      { testarea && <>
        <div className="test"></div>
        <div className="list"></div>
      </>}
    </div>
  );
}

//

export default App;
