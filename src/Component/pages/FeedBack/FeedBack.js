import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import { getAllPost } from "../../Services/user-createPost";
import Post from "./Post";

const FeedBack = () => {
  const [postContent, setPostContent] = useState({
    pageNumber: "",
    pageSize: "",
    totalPages: "",
    lastPage: false,
    content: [],
  });
  useEffect(() => {
    // getAllPost(0, 5)
    //   .then((response) => {
    //     console.log(response);
    //     setPostContent(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    changePage(0);
  }, []);
  const changePage = (pageNumber = 0, pageSize = 5) => {
    // console.log(pageNumber);
    // console.log(postContent.pageNumber);
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
      return;
    }
    getAllPost(pageNumber, pageSize)
      .then((response) => {
        // console.log(response);
        setPostContent(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Container className="text-center my-2">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h1>Blog Count ({postContent?.totalRecords})</h1>
            {postContent?.data?.map((myData) => {
              // console.log(myData);
              return <Post sent={myData} key={myData.postId} />;
            })}
            <Container className="my-3">
              <Pagination size="md">
                <PaginationItem
                  disabled={postContent.pageNumber === 0}
                  onClick={() => {
                    changePage(postContent.pageNumber - 1);
                  }}
                >
                  <PaginationLink>Previous</PaginationLink>
                </PaginationItem>
                {[...Array(postContent.totalPages)].map((myData, index) => {
                  return (
                    <PaginationItem
                      key={index}
                      active={postContent.pageNumber === index}
                      onClick={() => {
                        changePage(index);
                      }}
                    >
                      <PaginationLink>{index + 1}</PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem
                  disabled={postContent.lastPage}
                  onClick={() => {
                    changePage(postContent.pageNumber + 1);
                  }}
                >
                  <PaginationLink>Next</PaginationLink>
                </PaginationItem>
              </Pagination>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeedBack;
