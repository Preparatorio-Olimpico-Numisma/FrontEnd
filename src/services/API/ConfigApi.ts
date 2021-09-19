import axios from 'axios';

const BaseURL = 'https://numisma-api.herokuapp.com';
const TokenManager = process.env.REACT_APP_TOKEN;

export const BaseApi = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${TokenManager}`,
  },
});
