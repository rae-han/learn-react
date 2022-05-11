import React, { useState, useCallback } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// # Custom Hooks
import useInput from "./hooks/useInput";

// # Page
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

import './App.css';

function App() {
  const navigate = useNavigate();
  const [username, handleUsername] = useInput('ccc')
  const [content, handleContent] = useInput('contents');

  const routeProfile = () => {
    navigate(`/profile/xyz`, {
      replace: false,
      state: {
        data: 'data'
      }
    })
  }

  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/info">Info</Link> */}
        <Link to="/profile/aaa">aaa 프로필</Link>
        <Link to="/profile/bbb">bbb 프로필</Link>
        <span>
          <input type="text" value={username} onChange={handleUsername} />
          <Link to={`/profile/${username}?content=${content}`}>의 프로필의 내용</Link>
          <input type="text" value={content} onChange={handleContent} />
        </span>
        <button onClick={routeProfile}>xyz 프로필</button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="child1" element={<div>child1</div>}></Route>
          <Route path="child2" element={<div>child2</div>}></Route>
          <Route path="" element={<div>not selected</div>}></Route>
        </Route>
        {/* <Route path={['about', 'info']} element={<AboutPage />} /> */}
        {/* // ? 여러개 어떻게 매칭 시키지? */}
        <Route path="/profile/*" element={<ProfilePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
