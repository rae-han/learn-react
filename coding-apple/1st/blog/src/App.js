import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState(['코트 추천', '남자 코트 추천', '여자 코트 추천']);
  const [like, setLike] = useState(0)
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        {posts.map(post => (
          <div key={post}>
            <h3>{ post }</h3>
            <p>2월 17일 발행</p>
            <span onClick={() => setLike(like+1)}>{like}</span>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  )
}
// 7:09

export default App;
