import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Avatar, Button } from 'antd';

import { logoutRequestAction } from '../reducers/user'

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector(({user}) => ({
    me: user.me,
    logOutLoading: user.logOutLoading
  }))
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  useEffect(() => {
    console.log(me)
  }, [me])

  return (
    <Card
      actions={[
        <div key="twit"></div>,
        <div key="followings">팔로잉</div>,
        <div key="followers">팔로워</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading={logOutLoading} >로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
