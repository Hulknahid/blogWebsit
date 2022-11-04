import React from "react";
import { Col, Container, Row } from "reactstrap";
import Base from "../../Base";
import CategorySideBar from "../CategorySideBar/CategorySideBar";
import FeedBack from "./FeedBack/FeedBack";

const Home = () => {
  return (
    <div>
      <Base>
        <Container className="mt-3">
          <Row>
            <Col md={2}>
              <CategorySideBar />
            </Col>
            <Col md={10}>
              <FeedBack />
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
};

export default Home;
