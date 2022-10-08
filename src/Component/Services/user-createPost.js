import { myAxios } from "./Helper";
export const createPost = (user) => {
  console.log("user", user);
  const payLoad = {
    title: user.categoryTitle,
    content: user.categoryDescription,
  };
  return myAxios
    .post(`/api/post/userId/47/categoryId/${user.categoryId}`, payLoad)
    .then((response) => response.data);
};
