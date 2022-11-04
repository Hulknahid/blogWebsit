import { myAxios } from "./Helper";
export const postComment = (postId) => {
  return myAxios
    .get(`api/post/${postId}/comments`)
    .then((response) => response.data);
};

export const createComments = (addComments, postId) => {
  console.log("nahid", addComments);
  console.log("hasan", postId);
  return myAxios
    .post(`/api/post/${postId}/comment`, addComments)
    .then((response) => response.data);
};

export const uploadPostImage = (image, postId) => {
  // console.log(image);
  let formData = new FormData();
  formData.append("image", image);
  return myAxios
    .post(`/api/file/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};
