import axios from "axios";

const api = axios.create({
  baseURL: "https://6961163ce7aa517cb79801e1.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
