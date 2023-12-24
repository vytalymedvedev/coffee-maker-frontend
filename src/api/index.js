import axios from 'axios';

const BACKEND_BASE_URL= 'http://localhost:8080/api';

export const postConfig = (machine_size, drink_capacity) => {
  return axios.post(`${BACKEND_BASE_URL}/machines`, { machine_size, drink_capacity });
};

export const getConfigs = () => {
  return axios.get(`${BACKEND_BASE_URL}/machines`);
};

export const patchConfig = (id, amount) => {
  return axios.patch(`${BACKEND_BASE_URL}/machines/${id}`, { amount });
};