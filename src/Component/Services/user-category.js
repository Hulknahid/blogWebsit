import { myAxios } from "./Helper";

export const allCategories = () => {
  return myAxios.get("/api/category").then((response) => response.data);
};
