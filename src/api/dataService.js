import axios from "axios";

export const fetchUserData = () => {
  return axios.get("https://randomuser.me/api/?results=5");
};
