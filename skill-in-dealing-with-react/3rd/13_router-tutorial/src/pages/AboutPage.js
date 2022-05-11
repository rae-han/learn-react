import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom'

const AboutPage = () => {
  return (
    <>
      <div>About</div>
      <div>
        <Link to="child1">Child1</Link>
        <Link to="child2">Child2</Link>
      </div>
      <Outlet />
    </>
  );
};

export default AboutPage;