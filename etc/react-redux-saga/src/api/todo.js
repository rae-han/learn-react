import axios from 'axios';

const client = axios.create();

export const listTodo = () => client.get('/todo');
