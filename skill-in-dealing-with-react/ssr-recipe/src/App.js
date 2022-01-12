import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './components/Menu';
// import RedPage from './pages/RedPage'
// import BluePage from './pages/BluePage'
// import UsersPage from './pages/UsersPage'
// 코드 스플리트
import loadable from '@loadable/component'
const RedPage = loadable(() => import('./pages/RedPage'))
const BluePage = loadable(() => import('./pages/BluePage'))
const UsersPage = loadable(() => import('./pages/UsersPage'))


function App() {
  return (
    <div className="App">
     <Menu></Menu>
     <hr/>
     <Route path="/red" component={RedPage}></Route>
     <Route path="/blue" component={BluePage}></Route>
     <Route path="/users" component={UsersPage}></Route>
    </div>
  );
}

export default App;
