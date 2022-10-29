import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText } from "reactstrap";

const Post = (receive = { title: "Title" }) => {
  // console.log(receive);
  return (
    <div>
      <Card className="border-0 shadow-sm mt-3">
        <CardBody>
          <h3>Title: {receive.sent.title}</h3>
          <CardText>Description: {receive.sent.description}...</CardText>
          <Link
            className="btn btn-success"
            to={`/posts/${receive.sent.postId}`}
          >
            Read More
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;

// import React from "react";
// import { Card, CardBody, CardText, Button } from "reactstrap";

// function Post(receive) {
//   return (
//     <div>
//       <Card className="border-0 shadow-sm mt-3">
//         <CardBody>
//           <h3>{receive.sent.title}</h3>
//           <CardText
//             dangerouslySetInnerHTML={{ __html: receive.sent.description }}
//           ></CardText>
//           <Button>Read More</Button>
//           <Button color="danger ms-2">Delete</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

// export default Post;
