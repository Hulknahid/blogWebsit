import { SetAuthToken } from "../Component/Services/Helper";
//isLogged in
export const isLogged = () => {
  const data = localStorage.getItem("data");
  if (data == null) {
    return false;
  } else {
    SetAuthToken();
    return true;
  }
};
//doLogin data set a localstorage

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  SetAuthToken();
  next();
};
//do logout remove from localstorage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};
// get current user details
export const getCurrentUserDetails = () => {
  if (isLogged()) {
    return JSON.parse(localStorage.getItem("data"))?.user;
  } else {
    return undefined;
  }
};
