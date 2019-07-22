import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 117f320fa654dc2bd2699a6421162f13f3d77cb5041f4025318e319bf3346f9f',
  }
});