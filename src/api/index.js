import axios from 'axios';

const BACKEND_BASE_URL= 'http://localhost:8080/api';

export const postConfig = (machine_size, drink_capacity) => {
  return axios.post(`${BACKEND_BASE_URL}/machines`, { machine_size, drink_capacity });
};