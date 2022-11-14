import React, { useState } from "react";
import { useContext } from "react";
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
} from "reactstrap";
import { doLogin } from "../../auth";
import Base from "../../Base";
import userContext from "../../Context/UserContext";
import { login } from "../Services/user-service";
const Login = () => {
  const userContextData = useContext(userContext);
  console.log("userContextData", userContextData);
  const navigator = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const chngeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (email.trim() == "" || password.trim() == "") {
      toast.error("Email is required and Password is required !!");
    }

    login(data)
      .then((data) => {
        console.log(data);
        //login data save in localstorage
        doLogin(data, () => {
          console.log("Login details is saved to localstorage");
          userContextData.setUser({
            data: data,
            login: true,
          });
          navigator("/user/dashboard");
        });
        toast.success("Login successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const resetData = () => {
    setData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <Base>
        <Container>
          <Row className="my-3">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>
                  <h3>Fill in Login Form</h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={onSubmit}>
                    <FormGroup>
                      <Label htmlFor="email">Enter Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter here"
                        type="email"
                        name="email"
                        onChange={(e) => chngeHandler(e)}
                        value={email}
                      />
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
                      />
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="dark" type="submit">
                        Login
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

export default Login;
