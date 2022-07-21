import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_SERVER_HOST,
});
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
