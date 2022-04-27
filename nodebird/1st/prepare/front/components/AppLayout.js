import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd'

function AppLayout({ children }) {
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
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item key="user-signup">
          <Link href="/user/signup"><a>signup</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>왼</Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github/rae-han" target="_blank" rel="" ></a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;