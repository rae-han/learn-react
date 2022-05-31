import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {LOAD_POST_REQUEST} from "../reducers/post";

function Home() {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const mainPosts = useSelector(state => state.post.mainPosts); // 취향이지만 최적화가 달라질 수 있다.

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    })
  }, []);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
}

export default Home;
