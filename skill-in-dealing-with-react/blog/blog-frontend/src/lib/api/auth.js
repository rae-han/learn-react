import client from './client';

export const login = ({ username, password }) => client({
  method: 'post',
  url: '/api/auth/login',
  data: {
    username,
    password
  }
})

// export const register = ({ username, password }) => client({
//   method: 'post',
//   url: '/api/auth/register',
//   data: {
//     username,
//     password
//   }
// })
export const register = ({username, password}) => client.post('/api/auth/register', { username, password })

export const check = () => client.get('/api/auth/check')

export const logout = () => client.post('/api/auth/logout');