import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import wrapper from "../store/configureStore";

function Home() {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector(state => state.post); // 취향이지만 최적화가 달라질 수 있다.

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST
    })
  }, [])

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
          // const lastId = mainPosts[mainPosts.length-1].id;
          // mainPosts 갯수가 0이면 에러가 난다.
          const lastId = mainPosts[mainPosts.length-1]?.id;

          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          })
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [hasMorePosts, loadPostsLoading, mainPosts])

  useEffect(() => {
    if(retweetError) {
      alert(retweetError)
    }
  }, [retweetError])

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps((context) => {
//   // 이 부분이 home보다 먼저 실행된다.
//   // context 안에 store가 들어있다.
//   console.log('context', context)
//
//   context.store.dispatch({
//     type: LOAD_POSTS_REQUEST,
//   })
//   context.store.dispatch({
//     type: LOAD_MY_INFO_REQUEST
//   })
// });
// 단순히 이렇게 한다고해서 되는건 아니다
// 이때 나오는게 하이드레이트
// 근데 처음 적용할 때 me post가 안들어 가 있고.
// index 안에 index, user, post가 있다.
// index: { index, user, post } => { index, user, post }
// 그럼 먼가 구조가 잘못 됐다는 듯.
// => reducer/index.js

export default Home;
