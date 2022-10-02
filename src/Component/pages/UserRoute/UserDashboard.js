import React from "react";
import { Container } from "reactstrap";
import Base from "../../../Base";
import AddPost from "../../Category/AppPost";

const UserDashboard = () => {
  return (
    <Base>
      <Container>
        <div>
          <AddPost />
        </div>
      </Container>
    </Base>
  );
};

export default UserDashboard;
