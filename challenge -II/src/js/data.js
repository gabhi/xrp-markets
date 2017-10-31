import axios from 'axios';

export function goFetch() {
  axios.get("https://data.ripple.com/v2/accounts/r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV/payments").then((response) => {
    return response.data;
  });
  }