import React from 'react';

const data = {
  a: {
    name: 'a',
    desc: 'aaaaa'
  },
  b: {
    name: 'b',
    desc: 'bbbbb'
  }
}

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if(!profile) {
    return <div>존재하지 않는 사용자</div>
  }

  return (
    <div>
      <div>{username} ({profile.name})</div>
      <div>{profile.desc}</div>
    </div>
  );
};

export default Profile;