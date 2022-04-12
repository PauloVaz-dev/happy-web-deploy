import axios from 'axios';

const api = axios.create({
  baseURL: 'https://paulovaz-dev-happy.herokuapp.com'
});

export default api;
