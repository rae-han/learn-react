import axios from 'axios'

// const sleep = n => new Promise(resolve => setTimeout(resolve, n))

// const posts = new Array(16).fill({}).map((arr, idx) => ({ id: idx, title: `제목${idx}`, body: `내용${idx}`}))

// export const getPosts = async () => {
//   await sleep(1000);
//   return posts;
// }
export const getPosts = async () => {
  const response = await axios({
    method: 'get',
    url: `/posts`
  })
  return response.data;
}

// export const getPost = async id => {
//   await sleep(500);
//   return posts.find(post => post.id === id);
// };
export const getPost = async id => {
  const response = await axios({
    method: 'get',
    url: `/posts/${id}`
  })
  return response.data;
}