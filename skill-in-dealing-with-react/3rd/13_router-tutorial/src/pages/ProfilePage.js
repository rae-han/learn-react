import React from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom'

// # Hooks
import useQuery from "../hooks/useQuery";

const ProfileComponent = ({ content }) => {
  const { username } = useParams();

  return (
    <>
      <div>username: {username}</div>
      <div>content: {content}</div>
    </>
  )
}

const ProfilePage = () => {
  const { content: asdf = '정보 없음' } = useQuery();
  const { state } = useLocation();
  console.log(state)

  return (
    <Routes>
      <Route path="/*" element={<div>유저 정보가 없습니다.</div>} />
      <Route path="/:username" element={<ProfileComponent content={asdf} />} />
    </Routes>
  );
};

export default ProfilePage;