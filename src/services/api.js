import axios from "axios";

export const key = "89ef1b99f271a9a021ee2a1c80c7744a3dfaff0c";
const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
