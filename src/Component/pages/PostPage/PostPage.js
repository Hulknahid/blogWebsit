import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { isLogged } from "../../../auth";
import Base from "../../../Base";
import { createComments, postComment } from "../../Services/PostComment";
import { loadPost } from "../../Services/user-createPost";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    loadPost(postId)
      .then((response) => {
        // console.log(response);
        setPost(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    getPostComment();
  }, []);
  const getPostComment = () => {
    postComment(postId)
      .then((response) => {
        // console.log(response);
        setPostComments(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // add comment section
  const [addComments, setAddComments] = useState({
    comment: "",
    status: "",
  });
  const { comment, status } = addComments;
  const changeHadler = (e) => {
    const { name, value } = e.target;
    setAddComments({ ...addComments, [name]: value });
    // console.log(addComments);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!isLogged()) {
      toast.error("You need to login first");
    }
    createComments(addComments, postId)
      .then((response) => {
        console.log(response);
        getPostComment();
        toast.success("Comment added successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Comment section must not be black");
      });
  };
  return (
    <Base>
      <Container>
        <Link className="btn btn-success my-3" to={"/"}>
          Home
        </Link>
        <Row>
          <Col md={{ size: 12 }}>
            {post && (
              <Card className="mt-3">
                <CardBody>
                  <h3 className="text-muted">{post.category.categoryTitle}</h3>
                  <CardText>
                    posted By : <b>{post.users.name}</b>
                    <b>{new Date(post.createdAt).toLocaleString()}</b>
                    <span className="text-danger"> PostId: {postId}</span>
                  </CardText>
                  <h3>Post Title: {post.title}</h3>
                  <div>
                    <img src={post.postImage} alt="" />
                  </div>
                  <div>
                    <p>Post Description: {post.description}</p>
                  </div>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 9, offset: 1 }}>
            <h1>Comments ({postComments ? postComments.length : "0"})</h1>
            {postComments &&
              postComments.map((myData, index) => {
                return (
                  <Card key={index} className="my-2">
                    <CardBody>
                      <h3>
                        {index + 1}:-{myData.comment}
                      </h3>
                    </CardBody>
                  </Card>
                );
              })}
            <Card>
              <h1>Create Comment</h1>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="content">Comments</Label>
                    <Input
                      placeholder="Enter here..."
                      type="textarea"
                      value={comment}
                      name="comment"
                      onChange={changeHadler}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="content">Status</Label>
                    <Input
                      placeholder="Enter here..."
                      type="select"
                      value={status}
                      name="status"
                      onChange={changeHadler}
                    >
                      <option disabled value={0}>
                        --Select Option--
                      </option>
                      <option value="Pandding">Pandding</option>
                    </Input>
                  </FormGroup>
                  <Button
                    className="mt-2"
                    color="success"
                    onClick={submitHandler}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default PostPage;
