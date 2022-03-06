import axios from 'axios';

const [GET, POST] = ['get', 'post'];
const apiUrl = 'https://jsonplaceholder.typicode.com';

export const getPost = id => axios({
  method: GET,
  url: `${apiUrl}/posts/${id}`
});

export const getUsers = id => axios({
  method: GET,
  url: `${apiUrl}/users`
})