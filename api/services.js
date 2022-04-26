import axios from "axios";

export const getUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
