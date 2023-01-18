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

export const sendMail = ({ from, to, subject, message }) =>
  axios.post('/handle', {
    action: 'mail',
    mail: {
      from,
      to,
      subject,
      message,
    },
  });

export const log = ({ name, data }) =>
  axios.post('/handle', {
    action: 'log',
    log: {
      name,
      data,
    },
  });
