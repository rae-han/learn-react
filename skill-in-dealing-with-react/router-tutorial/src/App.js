import React from 'react'
import { Route, Link } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Profiles from './pages/Profiles'
import HistorySample from './HistorySample'
import WithRouterSample from './WithRouterSample'

const App = () => {
  return (
    <div>
      <div className="router-list">
        <HistorySample test={1} />
        <WithRouterSample />
        <ul>
          <li><Link to='/'>홈</Link></li>
          <li><Link to='/about'>소개</Link></li>
          <li><Link to='/info?detail=true'>소개</Link></li>
          <li><Link to='/profiles/'>프로필</Link></li>
          <li><Link to='/profile/a'>a의 프로필</Link></li>
          <li><Link to='/profile/b'>b의 프로필</Link></li>
        </ul>
      </div>
      <div className="router-list">
        <Route path="/" component={Home} exact={true}/>
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profiles" component={Profiles} />
      </div>
    </div>
  )
}

export default App;
