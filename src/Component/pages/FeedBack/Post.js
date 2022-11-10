// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Card, CardBody, CardText } from "reactstrap";
// import { getCurrentUserDetails, isLogged } from "../../../auth";

// const Post = ({ sent, deleteMypost }) => {
//   const [users, setUsers] = useState();
//   const [login, setLogin] = useState(false);
//   useEffect(() => {
//     setUsers(getCurrentUserDetails());
//     setLogin(isLogged());
//   }, []);
//   return (
//     <div>
//       <Card className="border-0 shadow-sm mt-3">
//         <CardBody>
//           <h3>Title: {sent.title}</h3>
//           <CardText>Description: {sent.description}...</CardText>
//           <Link className="btn btn-success" to={`/posts/${sent.postId}`}>
//             Read More
//           </Link>
//           {login &&
//             (users && users.id === sent.users.id ? (
//               <Button
//                 color="danger"
//                 className="ms-2"
//                 onClick={() => {
//                   deleteMypost(sent.postId);
//                 }}
//               >
//                 Delete
//               </Button>
//             ) : (
//               ""
//             ))}
//         </CardBody>
//       </Card>
//     </div>
//   );
// };
// export default Post;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText } from "reactstrap";
import { getCurrentUserDetails, isLogged } from "../../../auth";

const Post = ({ sent, deleteMypost }) => {
  // console.log(sent.postId);
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setUser(getCurrentUserDetails());
    setLogin(isLogged());
  }, []);
  return (
    <div>
      <Card className="border-0 shadow-sm mt-3">
        <CardBody>
          <h3>Title: {sent.title}</h3>
          <CardText>Description: {sent.description}...</CardText>
          <Link className="btn btn-success" to={`/posts/${sent.postId}`}>
            Read More
          </Link>
          {login &&
            (user.id === sent.users.id ? (
              <Button
                color="danger"
                className="ms-2"
                onClick={() => {
                  deleteMypost(sent.postId);
                }}
              >
                Delete
              </Button>
            ) : (
              ""
            ))}
        </CardBody>
      </Card>
    </div>
  );
};
export default Post;
