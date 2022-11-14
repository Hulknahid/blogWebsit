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
import { deletePostWise, getAllPost } from "../../Services/user-createPost";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
const FeedBack = () => {
  const [postContent, setPostContent] = useState({
    pageNumber: "",
    pageSize: "",
    totalPages: "",
    lastPage: false,
    content: [],
  });
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    changePage(currentPage);
  }, [currentPage]);
  const changePage = (pageNumber = 0, pageSize = 5) => {
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
      return;
    }
    getAllPost(pageNumber, pageSize)
      .then((response) => {
        // setPostContent(response);
        setPostContent({
          content: [...postContent.content, ...response.data],
          pageNumber: postContent.pageNumber,
          pageSize: postContent.pageSize,
          totalPages: postContent.totalPages,
          lastPage: postContent.lastPage,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changePageInfite = () => {
    console.log("scroll");
    setCurrentPage(currentPage + 1);
  };
  const deleteMypost = (postId) => {
    deletePostWise(postId)
      .then((response) => {
        console.log(response);
        setPostContent((prev) => {
          console.log(prev);
          return {
            ...postContent,
            content: prev.content.filter((post) => post.postId !== postId),
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(postContent);
  return (
    <div>
      <Row className="text-center">
        <Col md={12} className="me-0">
          <h1>Blog Count ({postContent.content.length})</h1>
          <InfiniteScroll
            dataLength={postContent.content?.length}
            next={changePageInfite}
            hasMore={!postContent.lastPage}
          >
            {postContent?.content?.map((myData) => {
              return (
                <Post
                  sent={myData}
                  key={myData.postId}
                  deleteMypost={deleteMypost}
                />
              );
            })}
          </InfiniteScroll>
        </Col>
      </Row>
    </div>
  );
};

export default FeedBack;
