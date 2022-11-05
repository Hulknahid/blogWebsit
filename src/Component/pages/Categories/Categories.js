import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Base from "../../../Base";
import CategorySideBar from "../../CategorySideBar/CategorySideBar";
import { loadPostCategoryWise } from "../../Services/user-createPost";
import Post from "../FeedBack/Post";

const Categories = () => {
  const categoryId = useParams();
  const [posts, setPosts] = useState([]);
  //   console.log(posts);
  useEffect(() => {
    loadPostCategoryWise(categoryId)
      .then((response) => {
        // console.log(response);
        setPosts([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  return (
    <div>
      <Base>
        <Container className="mt-3">
          <Row>
            <Col md={2}>
              <CategorySideBar />
            </Col>
            <Col md={10}>
              {posts &&
                posts.map((myData, index) => {
                  return <Post sent={myData} key={index} />;
                })}
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
};

export default Categories;
