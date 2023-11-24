import axios from 'axios';
import {API_TOKEN, BASE_URL} from '../common/constants';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});
