import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPost, getUsers } from '../store/sample'

function Sample(props) {
  const { 
    post, users, 
    // loading: { GET_POST: loadingPost, GET_USERS: loadingUsers }
  } = useSelector(state => state.sample);
  const { 'sample/GET_POST': loadingPost, 'sample/GET_USERS': loadingUsers } = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers(1));
  }, [getPost, getUsers])

  return (
    <div>
      {/* {post} {users} {loadingPost} {loadingUsers} */}
      <section>
        <h1>Post</h1>
        {loadingPost ? '로딩 중...' : post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <section>
        <h1>User List</h1>
        {loadingUsers && 'loading...'}
        {!loadingUsers && users && (
          <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
        )}
      </section>
    </div>
  );
}

export default Sample;