import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from '@emotion/styled'
import { Menu, Input, Row, Col } from 'antd'

import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const SearchInput = styled(Input.Search)`
  /* vertical-align: 'middle'; */
`;

function AppLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const SearchInputStyle = useMemo(() => ({ verticalAlign: 'middle' }), [])

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="index">
          <Link href="/"><a>home</a></Link>
        </Menu.Item>
        <Menu.Item key="profile">
        <Link href="/profile"><a>profile</a></Link>
        </Menu.Item>
        <Menu.Item key="user-:username">
          <Link href="/user/user"><a>user</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton style={SearchInputStyle} />
        </Menu.Item>
        <Menu.Item key="user-signup">
          <Link href="/user/signup"><a>signup</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github/rae-han" target="_blank" rel="noreferrer noopener" ></a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;