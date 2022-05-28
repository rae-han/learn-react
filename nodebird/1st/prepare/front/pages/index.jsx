import React from "react";
import { useSelector } from 'react-redux'

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

function Home() {
  const { me } = useSelector(state => state.user);
  const mainPosts = useSelector(state => state.post.mainPosts); // 취향이지만 최적화가 달라질 수 있다.

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
}

export default Home;
