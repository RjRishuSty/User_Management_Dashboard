import axios from "axios";

const api = axios.create({
    //* This is base url JSON placeholder.
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
