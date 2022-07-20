import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Head from 'next/head';
import Router from 'next/router';
import useSWR from 'swr';
import axios from "axios";

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST} from '../reducers/user'

const fetcher = (url) => axios.get(url, { withCredentials: true}).then((result) => result.data);

function Profile() {
  const dispatch = useDispatch();
  const { me } = useSelector(({ user }) => ({
    me: user.me
  }))
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);
  const { data: followersData, error: followerError } = useSWR(`http://localhost:3080/user/followers?limit=${followersLimit}`, fetcher);
  const { data: followingsData, error: followingError } = useSWR(`http://localhost:3080/user/followings?limit=${followingsLimit}`, fetcher);
  // fetcher는 앞의 url을 실제로 어떻게 가져올 것인지를 적어주는 것
  // 이 부분을 수정하여 graphql에도 활용 가능하다.
  // 앞의 구조분해 할 할당 데이터가 둘다 없으면 로딩중 그게 아니면 각각 데이터가 있다.

  useEffect(() => {
    if(!(me && me.id)) {
      Router.push('/')
    }
  }, [me && me.id])

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   })
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   })
  // }, [])

  const loadMoreFolowings = useCallback(() => {
    setFollowingsLimit(((prev) => prev + 3));
  }, []);

  const loadMoreFolowers = useCallback(() => {
    setFollowersLimit(((prev) => prev + 3));
  }, []);

  if(!me) {
    return '내 정보 로딩중'
  }

  if(followerError || followingError) {
    console.error(followerError || followingError);
    return (<div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>);
  }

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        {/*<FollowList header="팔로잉 목록" data={me?.Followings} />*/}
        {/*<FollowList header="팔로워 목록" data={me?.Followers} />*/}
        { followingsData && <FollowList header="팔로잉 목록" data={followingsData} onClickMore={loadMoreFolowings} loading={!followingsData && !followingError} />}
        { followersData && <FollowList header="팔로워 목록" data={followersData} onClickMore={loadMoreFolowers} loading={!followersData && !followerError} />}
      </AppLayout>
    </>
  );
}

export default Profile;