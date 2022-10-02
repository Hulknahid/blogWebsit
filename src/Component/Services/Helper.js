import axios from "axios";
export const BASE_URL = "https://blog-api-rest-api.herokuapp.com";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
