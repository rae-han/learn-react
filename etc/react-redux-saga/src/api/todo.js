import axios from 'axios';

const client = axios.create();

export const listTodo = () => client.get('/todo');

export const insert = text => client.post('/todo', text)
