import { myAxios } from "./Helper";

export const signup = (user) => {
  return myAxios
    .post("/api/user/register", user)
    .then((response) => response.data);
};

// export const login = (user) => {
//   const userPayload = {
//     username: user.email,
//     password: user.password,
//   };
//   return myAxios.post("/api/user/login ", userPayload).then((response) => {
//     console.log(response.data);
//   });
// };

export const login = (data) => {
  const userPayload = {
    username: data.email,
    password: data.password,
  };
  return myAxios
    .post("/api/user/login", userPayload)
    .then((response) => response.data);
};
