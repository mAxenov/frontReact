import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  // process.env.REACT_APP_API_TEST_URL
  timeout: 5000,
});
