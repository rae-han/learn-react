import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import List from './layouts/List'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <List></List>
      <Route path="/" exact={true}>
        <div>메인</div>
      </Route>
      <Route path="/detail" component={() => (<Detail></Detail>)}></Route>
    </div>
  );
}

//

export default App;
