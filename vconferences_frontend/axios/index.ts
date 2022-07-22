import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_SERVER_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
