import React from 'react';
import { Route } from 'react-router-dom'

// * page
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import WritePage from './pages/WritePage'
import { Helmet } from 'react-helmet-async'

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      {/* <Route component={} path="" /> */}
      <Route component={PostListPage} path={['/@:username', '/']} exact/>
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={LoginPage} path="/login" />
    </>
  );
};

export default App;