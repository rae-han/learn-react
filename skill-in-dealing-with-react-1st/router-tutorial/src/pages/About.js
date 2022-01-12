import React from 'react';
import qs from 'qs'

const About = ({ location }) => {
  console.log(location.search)

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리애긑 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      { showDetail && <p>detail 값이 true 입니다.</p> }
    </div>
  );
};

export default About;