import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  FormGroup,
  Label,
  Form,
  Input,
  Container,
  Button,
} from "reactstrap";
import { allCategories } from "../Services/user-category";

const AddPost = () => {
  useEffect(() => {
    allCategories()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="wrapper">
      <Card>
        <CardBody>
          <h1>Hulk Nahid</h1>
          <Form>
            <FormGroup>
              <Label for="title">Post Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Enter here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="content">Post Content</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                placeholder="Enter here"
                style={{ height: "300px" }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Post Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                placeholder="Enter here"
              >
                <option>Programing</option>
                <option>Web Development</option>
                <option>Math</option>
                <option>Friction</option>
                <option>Bollywood</option>
              </Input>
            </FormGroup>
            <Container className="text-center">
              <Button className="btn btn-success">Create Post</Button>
              <Button className="btn btn-danger ms-2">Content reset</Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
