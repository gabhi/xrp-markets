import axios from 'axios';

export function goFetch(url) {
  axios.get(url).then((response) => {
    return response.data;
  });
  }