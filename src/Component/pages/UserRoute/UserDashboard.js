import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { getCurrentUserDetails } from "../../../auth";
import Base from "../../../Base";
import AddPost from "../../Category/AppPost";
import {
  deletePostWise,
  loadPostUserWise,
} from "../../Services/user-createPost";
import Post from "../FeedBack/Post";
const UserDashboard = () => {
  const [user, setUser] = useState({});
  const [posts, setposts] = useState([]);
  useEffect(() => {
    setUser(getCurrentUserDetails());

    loadPostUserWise(getCurrentUserDetails().id)
      .then((response) => {
        console.log(response);
        setposts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteMypost = (postId) => {
    deletePostWise(postId)
      .then((response) => {
        console.log(response);
        setposts((prev) => prev.filter((post) => post.postId !== postId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Base>
      <Container>
        <AddPost />
        <span className="my-3">
          {posts &&
            posts?.map((myData, index) => {
              return (
                <Post sent={myData} key={index} deleteMypost={deleteMypost} />
              );
            })}
        </span>
      </Container>
    </Base>
  );
};

export default UserDashboard;
