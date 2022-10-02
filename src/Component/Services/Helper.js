import axios from "axios";
export const BASE_URL = "https://blog-api-rest-api.herokuapp.com";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const SetAuthToken = () => {
  const token = JSON.parse(localStorage.getItem("data"));
  console.log("token", token.access_token);

  if (token) {
    myAxios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token.access_token}`;
  } else {
    delete myAxios.defaults.headers.common["Authorization"];
  }
};
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
