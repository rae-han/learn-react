import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Avatar, Button } from 'antd';

import { logoutAction } from '../reducers/user'

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit"></div>,
        <div key="followings">팔로잉</div>,
        <div key="followers">팔로워</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>RH</Avatar>}
        title="Raehan"
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

console.log()

export default UserProfile;
