import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState(['코트 추천', '남자 코트 추천', '여자 코트 추천']);
  const [like, setLike] = useState(0);
  const [isModal, setIsModal] = useState(false)
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');

  const toggleModal = (value) => {
    setIsModal(value)
  }

  const showModal = post => {
    setTitle(post);
    toggleModal(true);
  }

  const addPost = () => {
    setPosts([input, ...posts]);
    setInput('');
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        {posts.map(post => (
          <div key={post} onClick={() => showModal(post)}>
            <h3>{ post }</h3>
            <p>2월 17일 발행</p>
            <span onClick={() => setLike(like+1)}>{like}</span>
            <hr/>
          </div>
        ))}
      </div>
      <div>
        <input type="text" onChange={e => setInput(e.target.value)} value={input}/>
        <button onClick={addPost}>입력</button>
      </div>

      { isModal && <Modal toggleModal={toggleModal} title={title}></Modal>}
    </div>
  )
}

const Modal = ({ title,toggleModal }) => (
  <div className="modal">
    <h2>{title}</h2>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={() => toggleModal(false)}>닫기</button>
  </div>
)


export default App;
