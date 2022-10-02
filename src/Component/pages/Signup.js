import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
  Label,
  Input,
  FormGroup,
  Button,
  FormFeedback,
} from "reactstrap";
import Base from "../../Base";
import { signup } from "../Services/user-service";
const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const { name, email, password, about } = data;
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });
  const chngeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    signup(data)
      .then((response) => {
        console.log("Success", response);
        navigate("/login");
        toast.success("Register successfully");
      })
      .catch((error) => {
        console.log("error", error);
        setError({
          errors: error,
          isError: false,
        });
      });
  };
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };
  return (
    <div>
      <Base>
        <Container>
          {JSON.stringify(data)}
          <Row className="my-3">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>
                  <h3>Fill in Registration Form</h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={onSubmit}>
                    <FormGroup>
                      <Label htmlFor="name">Enter Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter here"
                        type="name"
                        name="name"
                        onChange={(e) => chngeHandler(e)}
                        value={name}
                        invalid={
                          error.errors?.response?.data?.name ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.name}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email">Enter Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter here"
                        type="email"
                        name="email"
                        onChange={(e) => chngeHandler(e)}
                        value={email}
                        invalid={
                          error.errors?.response?.data?.email ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.email}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Enter Password</Label>
                      <Input
                        id="password"
                        placeholder="Enter here"
                        type="password"
                        name="password"
                        onChange={(e) => chngeHandler(e)}
                        value={password}
                        invalid={
                          error.errors?.response?.data?.password ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.password}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="about">Email</Label>
                      <Input
                        style={{ height: "250px" }}
                        id="about"
                        placeholder="Enter here"
                        type="textarea"
                        name="about"
                        onChange={(e) => chngeHandler(e)}
                        value={about}
                        invalid={
                          error.errors?.response?.data?.about ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.about}
                      </FormFeedback>
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="dark" type="submit">
                        Registration
                      </Button>
                      <Button
                        color="danger"
                        className="ms-2"
                        type="reset"
                        onClick={resetData}
                      >
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
};

export default Signup;
