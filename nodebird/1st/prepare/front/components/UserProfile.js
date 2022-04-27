import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
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

export default UserProfile;