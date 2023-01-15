import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BROKER_URL;

export const root = () => axios.post('/');

export const authenticate = ({ email, password }) =>
  axios.post('/handle', {
    action: 'auth',
    auth: {
      email,
      password,
    },
  });
