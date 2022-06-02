import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

function Home() {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(state => state.post); // 취향이지만 최적화가 달라질 수 있다.

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    })
  }, []);

  useEffect(() => {
    function onScroll() {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      const scrollY = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if(scrollY + clientHeight + 300 >= scrollHeight) {
        console.log(hasMorePosts, !loadPostsLoading);
        console.log(hasMorePosts && !loadPostsLoading);
        if(hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          })
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [hasMorePosts, loadPostsLoading])

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
}

export default Home;
