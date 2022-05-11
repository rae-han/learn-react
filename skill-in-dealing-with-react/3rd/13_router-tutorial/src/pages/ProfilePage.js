import React from 'react';
import { useParams, useLocation } from 'react-router-dom'
import qs from 'qs';
import useQuery from "../hooks/useQuery";

const ProfilePage = () => {
  const { username } = useParams();
  const { content } = useQuery();

  return (
    <div>
      <div>username: {username}</div>
      <div>content: {content}</div>
    </div>
  );
};

export default ProfilePage;