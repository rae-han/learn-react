import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Avatar, Button } from 'antd';

import { logoutRequestAction } from '../reducers/user'

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector(({user}) => ({
    me: user.me,
    isLoggingOut: user.isLoggingOut
  }))
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
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
        avatar={<Avatar>{me.nickname}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading={isLoggingOut} >로그아웃</Button>
    </Card>
  );
};

console.log()

export default UserProfile;
