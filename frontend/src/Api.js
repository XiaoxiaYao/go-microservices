import axios from 'axios';

axios.defaults.baseURL = process.env.BROKER_URL;

export const ping = () => {
  axios.post('/');
};
