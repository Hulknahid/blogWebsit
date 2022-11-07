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

export const loadPostCategoryWise = (categoryId) => {
  // console.log(categoryId);
  return myAxios
    .get(`/api/post/category/${categoryId.categoryId}`)
    .then((response) => response.data);
};

export const loadPostUserWise = (userId) => {
  // console.log(userId);
  return myAxios
    .get(`/api/post/user=${userId}`)
    .then((response) => response.data);
};

export const deletePostWise = (postId) => {
  console.log(postId);
  return myAxios
    .delete(`/api/post/${postId}`)
    .then((response) => response.data);
};
