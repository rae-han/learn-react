import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd'

function AppLayout({ children }) {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="index">
          <Link href="/">home</Link>
        </Menu.Item>
        <Menu.Item key="profile">
        <Link href="/profile">profile</Link>
        </Menu.Item>
        <Menu.Item key="user-signup">
          <Link href="/user/signup">signup</Link>
        </Menu.Item>
        <Menu.Item key="user-:username">
          <Link href="/user/user">user</Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;