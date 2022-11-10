// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";
// import {
//   Col,
//   Container,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Row,
// } from "reactstrap";
// import { getAllPost } from "../../Services/user-createPost";
// import Post from "./Post";

// const FeedBack = () => {
//   const [postContent, setPostContent] = useState({
//     pageNumber: "",
//     pageSize: "",
//     totalPages: "",
//     lastPage: false,
//     content: [],
//   });
//   useEffect(() => {
//     // getAllPost(0, 5)
//     //   .then((response) => {
//     //     console.log(response);
//     //     setPostContent(response);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//     changePage(0);
//   }, []);
//   const changePage = (pageNumber = 0, pageSize = 5) => {
//     // console.log(pageNumber);
//     // console.log(postContent.pageNumber);
//     if (pageNumber > postContent.pageNumber && postContent.lastPage) {
//       return;
//     }
//     if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
//       return;
//     }
//     getAllPost(pageNumber, pageSize)
//       .then((response) => {
//         // console.log(response);
//         setPostContent(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       <Container className="text-center my-2">
//         <Row>
//           <Col md={{ size: 10, offset: 1 }}>
//             <h1>Blog Count ({postContent?.totalRecords})</h1>
//             {postContent?.data?.map((myData) => {
//               // console.log(myData);
//               return <Post sent={myData} key={myData.postId} />;
//             })}
//             <Container className="my-3">
//               <Pagination size="md">
//                 <PaginationItem
//                   disabled={postContent.pageNumber === 0}
//                   onClick={() => {
//                     changePage(postContent.pageNumber - 1);
//                   }}
//                 >
//                   <PaginationLink>Previous</PaginationLink>
//                 </PaginationItem>
//                 {[...Array(postContent.totalPages)].map((myData, index) => {
//                   return (
//                     <PaginationItem
//                       key={index}
//                       active={postContent.pageNumber === index}
//                       onClick={() => {
//                         changePage(index);
//                       }}
//                     >
//                       <PaginationLink>{index + 1}</PaginationLink>
//                     </PaginationItem>
//                   );
//                 })}
//                 <PaginationItem
//                   disabled={postContent.lastPage}
//                   onClick={() => {
//                     changePage(postContent.pageNumber + 1);
//                   }}
//                 >
//                   <PaginationLink>Next</PaginationLink>
//                 </PaginationItem>
//               </Pagination>
//             </Container>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default FeedBack;
//***************Infinite scroll section***************** //
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useParams } from "react-router-dom";
// import { Col, Container, Row } from "reactstrap";
// import { getAllPost } from "../../Services/user-createPost";
// import Post from "./Post";

// const FeedBack = () => {
//   const [postContent, setPostContent] = useState({
//     content: [],
//     pageNumber: "",
//     pageSize: "",
//     totalPages: "",
//     lastPage: false,
//   });
//   const [currentPage, setCurrentPage] = useState(0);
//   useEffect(() => {
//     changePage(currentPage);
//   }, [currentPage]);
//   const changePage = (pageNumber = 0, pageSize = 5) => {
//     if (pageNumber > postContent.pageNumber && postContent.lastPage) {
//       return;
//     }
//     if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
//       return;
//     }
//     getAllPost(pageNumber, pageSize)
//       .then((response) => {
//         console.log(postContent.content);
//         console.log(response.data);
//         // setPostContent(response);
//         setPostContent({
//           content: [...postContent.content, ...response.data],
//           pageNumber: response.pageNumber,
//           pageSize: response.pageSize,
//           totalPages: response.totalPages,
//           lastPage: response.lastPage,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   console.log(currentPage + 1);
//   const changePageInfiti = () => {
//     console.log("Infinite scroll");
//     setCurrentPage(currentPage + 1);
//   };
//   return (
//     <div>
//       <Container className="text-center my-2">
//         <Row>
//           <Col md={{ size: 10, offset: 1 }}>
//             <h1>Blog Count ({postContent?.totalRecords})</h1>
//             <InfiniteScroll
//               dataLength={postContent.content.length}
//               next={changePageInfiti}
//               hasMore={!postContent.lastPage}
//             >
//               {postContent?.content?.map((myData) => {
//                 return <Post sent={myData} key={myData?.postId} />;
//               })}
//             </InfiniteScroll>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default FeedBack;

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
