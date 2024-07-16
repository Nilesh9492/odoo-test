// api.js
import axios from "axios";

// Create an instance of axios with a base URL
const api = axios.create({
  baseURL: "http://localhost:5000",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// You can add interceptors to handle request and response here
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
