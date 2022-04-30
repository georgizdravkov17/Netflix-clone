import axios from 'axios';

const authApiUrl = "http://localhost:5000";

export const registerUser = (userData) => {
  return axios.post(`${authApiUrl}/register`, userData);
}

export const loginUser = (userData) => {
  return axios.post(`${authApiUrl}/login`, userData);
}