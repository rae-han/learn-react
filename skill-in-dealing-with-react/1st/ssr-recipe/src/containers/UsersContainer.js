import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Users from '../components/Users';
import { getUsers } from '../modules/users'
import { Preloader } from '../lib/PreloadContext'

const UsersContainer = () => {
  const { users } = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    if (users) return;
    dispatch(getUsers());
  }, [dispatch, users]);

  return (
    <div>
      <Users users={users}/>
      <Preloader resolve={getUsers} />
    </div>
  );
};

export default UsersContainer;