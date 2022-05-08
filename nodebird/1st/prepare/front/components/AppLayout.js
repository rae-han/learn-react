import React, { useMemo } from 'react';
import { useSelector } from 'react-redux'
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
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const { isLoggedIn } = useSelector((state) => state.user)

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
        <Menu.Item key="user-username">
          <Link href="/user/user"><a>user</a></Link>
        </Menu.Item>
        <Menu.Item key="search-input">
          <SearchInput enterButton style={SearchInputStyle} />
        </Menu.Item>
        <Menu.Item key="user-signup">
          <Link href="/user/signup"><a>signup</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/rae-han" target="_blank" rel="noreferrer noopener"> Raehan&apos;s Github page</a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;