import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from '../WithRouterSample'


const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  }

  return (
    <div>
      <div>
        <WithRouterSample />
        <h3>사용자 목록</h3>
        <ul>
          <li>
            <Link to="/profiles/a">a</Link>
            <NavLink activeStyle={activeStyle} to="/profiles/a">a</NavLink>
          </li>
          <li>
            <Link to="/profiles/b">b</Link>
            <NavLink activeStyle={activeStyle} to="/profiles/b">b</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Route path="/profiles" exact render={()=><div>사용자를 선택해주세요</div>} />
        <Route path="/profiles/:username" component={Profile} />
      </div>
    </div>
  );
};

export default Profiles;
