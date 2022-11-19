import React, { useEffect, useState, useRef, useContext } from "react";
import Base from "../../../Base";
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
import { allCategories } from "../../Services/user-category";
import JoditEditor from "jodit-react";
import {
  createPost,
  loadPost,
  updatePost,
} from "../../Services/user-createPost";
import { getCurrentUserDetails } from "../../../auth/index";
import { toast } from "react-toastify";
// import { uploadPostImage } from "../Services/PostComment";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../../../Context/UserContext";
const UpdateUserPost = () => {
  const { postId } = useParams();
  const navigator = useNavigate();
  const userContextDate = useContext(userContext);
  const editor = useRef(null);
  const [categories, setCategories] = useState([]);
  const [post, setPost] = useState(null);
  useEffect(() => {
    allCategories()
      .then((response) => {
        // console.log(response);
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
      });

    loadPost(postId)
      .then((response) => {
        console.log(response);
        setPost(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (post) {
      if (post.users.id !== userContextDate.user.data.id) {
        navigator("/");
      }
    }
  }, [post]);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updatePost({ ...post, category: { categoryId: post.categoryId } })
      .then((response) => {
        console.log(response);
        toast.success("Post Update is successfully!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something is going to wrong");
      });
  };
  const updateHtml = () => {
    return (
      <div className="wrapper">
        <Card>
          {/* {JSON.stringify(post)} */}
          <CardBody>
            <h1 className="text-center text-warning">Update User Post</h1>
            <Form onSubmit={submitHandler}>
              <FormGroup>
                <Label for="title">Post Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter here"
                  onChange={(e) => changeHandler(e)}
                  value={post.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="content">Post Content</Label>
                <JoditEditor
                  ref={editor}
                  onChange={(newContent) =>
                    setPost({ ...post, description: newContent })
                  }
                  value={post.description}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Upload Image</Label>
                <Input type="file" id="image" placeholder="Enter here" />
              </FormGroup>
              <FormGroup>
                <Label for="categoryId">Post Category</Label>
                <Input
                  type="select"
                  name="categoryId"
                  id="categoryId"
                  placeholder="Enter here"
                  onChange={(e) => changeHandler(e)}
                  value={post.category.categoryId}
                >
                  <option disabled value={0}>
                    --Select Any One--
                  </option>

                  {categories?.map((myData) => {
                    // console.log("myData", myData);
                    return (
                      <option value={myData.categoryId} key={myData.categoryId}>
                        {myData.categoryTitle}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
              <Container className="text-center">
                <Button type="submit" className="btn btn-success">
                  Create Post
                </Button>
                <Button className="btn btn-danger ms-2">Content reset</Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  };
  return (
    <div>
      <Base>
        <Container>{post && updateHtml()}</Container>
      </Base>
    </div>
  );
};

export default UpdateUserPost;
