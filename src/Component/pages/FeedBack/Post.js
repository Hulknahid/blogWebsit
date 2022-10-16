// import React from "react";
// import { Button, Card, CardBody, CardText } from "reactstrap";

// const Post = (receive = { title: "Title" }) => {
//   //   console.log(receive.sent);
//   return (
//     <div>
//       <Card className="border-0 shadow-sm mt-3">
//         <CardBody>
//           <h3>{receive.sent.title}</h3>
//           <CardText>{receive.sent.description}...</CardText>
//           <Button>Read More</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Post;

import React from "react";
import { Card, CardBody, CardText, Button } from "reactstrap";

function Post(receive) {
  return (
    <div>
      <Card className="border-0 shadow-sm mt-3">
        <CardBody>
          <h3>{receive.sent.title}</h3>
          <CardText>{receive.sent.description}</CardText>
          <Button>Read More</Button>
          <Button color="danger ms-2">Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Post;
