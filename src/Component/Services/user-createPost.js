import { myAxios } from "./Helper";
export const createPost = (user) => {
  console.log("user", user);
  const payLoad = {
    title: user.title,
    description: user.content,
  };
  console.log(payLoad);
  return myAxios
    .post(
      `/api/post/userId/${user.userId}/categoryId/${user.categoryId}`,
      payLoad
    )
    .then((response) => response.data);
};

// export const getAllPost = () => {
//   return myAxios
//     .get(`/api/post?pageNumber=0&pageSize=16&dir=DC`)
//     .then((response) => response.data);
// };

// export const getAllPost = (pageNumber, pageSize) => {
//   return myAxios
//     .get(`/api/post?pageNumber=${pageNumber}&pageSize=${pageSize}`)
//     .then((resposne) => {
//       return resposne.data;
//     });
// };

export const getAllPost = (pageNumber, pageSize) => {
  return myAxios
    .get(
      `/api/post?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=createdAt&sortDir=dese`
    )
    .then((response) => response.data);
};

export const loadPost = (postId) => {
  console.log(postId);
  return myAxios
    .get(`/api/post/postId=${postId}`)
    .then((response) => response.data);
};
