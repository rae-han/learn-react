import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample'

const { useEffect } = React;

const SampleContainer = () => {
  const post = useSelector(state => state.sample.post);
  const users = useSelector(state => state.sample.users)  
  const { GET_POST: loadingPost, GET_USERS: loadingUsers } = useSelector(state => state.sample.loading);
  console.log(loadingPost, loadingUsers)

  const dispatch = useDispatch();
  const fetchPost = useCallback(id => (dispatch(getPost(id))), [dispatch]) 
  const fetchUsers = useCallback(id => (dispatch(getUsers(id))), [dispatch])

  useEffect(() => {
    fetchPost(1);
    fetchUsers(1);
  }, [fetchPost, fetchUsers])

  return (
    <div>
      <Sample 
        post={post}
        users={users}
        loadingPost={loadingPost}
        loadingUsers={loadingUsers}
      />
    </div>
  );
};

export default SampleContainer;