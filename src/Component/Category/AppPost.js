// import React, { useEffect, useState, useRef } from "react";
// import {
//   Card,
//   CardBody,
//   FormGroup,
//   Label,
//   Form,
//   Input,
//   Container,
//   Button,
// } from "reactstrap";
// import { allCategories } from "../Services/user-category";
// import JoditEditor from "jodit-react";
// import { createPost } from "../Services/user-createPost";
// import { getCurrentUserDetails } from "../../auth/index";
// import { uploadPostImage } from "../Services/PostComment";
// import { toast } from "react-toastify";
// const AddPost = () => {
//   const editor = useRef(null);
//   const [post, setPost] = useState({
//     title: "",
//     content: "",
//     categoryId: "",
//   });
//   const [image, setImage] = useState(null);

//   const { title, content, categoryId } = post;
//   const [user, setUser] = useState(undefined);
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     setUser(getCurrentUserDetails());
//     allCategories()
//       .then((response) => {
//         // console.log(response);
//         setCategories(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     // console.log(name);
//     setPost({ ...post, [name]: value });
//   };
//   const contentChangeHandler = (data) => {
//     setPost({ ...post, content: data });
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim() === "") {
//       alert("Title is Required");
//     }
//     if (content.trim() === "") {
//       alert("Content is Required");
//     }
//     if (categoryId.trim() === "") {
//       alert("CategoryId is Required");
//     }

//     // console.log("post", post.postId);
//     post["userId"] = user.id;
//     createPost(post)
//       .then((response) => {
//         console.log(response);
//         setPost(response);
//         uploadPostImage(image, response.postId)
//           .then((response) => {
//             console.log(response);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//         toast.success("Post create successFully");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   // Image upload in react
//   const handlerFileChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };
//   // console.log("post", post);
//   return (
//     <div className="wrapper">
//       <Card>
//         {JSON.stringify(post)}
//         <CardBody>
//           <h1>Hulk Nahid</h1>
//           <Form onSubmit={onSubmit}>
//             <FormGroup>
//               <Label for="title">Post Title</Label>
//               <Input
//                 type="text"
//                 name="title"
//                 id="title"
//                 placeholder="Enter here"
//                 onChange={changeHandler}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="content">Post Content</Label>
//               <JoditEditor
//                 ref={editor}
//                 value={content}
//                 onChange={contentChangeHandler}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="image">Upload Image</Label>
//               <Input
//                 type="file"
//                 id="image"
//                 placeholder="Enter here"
//                 onChange={handlerFileChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="categoryId">Post Category</Label>
//               <Input
//                 type="select"
//                 name="categoryId"
//                 id="categoryId"
//                 placeholder="Enter here"
//                 onChange={changeHandler}
//                 defaultValue={0}
//               >
//                 <option disabled value={0}>
//                   --Select Any One--
//                 </option>

//                 {categories?.map((myData) => {
//                   // console.log("myData", myData);
//                   return (
//                     <option value={myData.categoryId} key={myData.categoryId}>
//                       {myData.categoryTitle}
//                     </option>
//                   );
//                 })}
//               </Input>
//             </FormGroup>
//             <Container className="text-center">
//               <Button type="submit" className="btn btn-success">
//                 Create Post
//               </Button>
//               <Button className="btn btn-danger ms-2">Content reset</Button>
//             </Container>
//           </Form>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default AddPost;

import React, { useEffect, useState, useRef } from "react";
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
import JoditEditor from "jodit-react";
import { createPost } from "../Services/user-createPost";
import { getCurrentUserDetails } from "../../auth/index";
import { toast } from "react-toastify";
import { uploadPostImage } from "../Services/PostComment";
const AddPost = () => {
  const editor = useRef(null);
  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });
  const [image, setImage] = useState(null);
  const { title, content, categoryId } = post;
  const [user, setUser] = useState(undefined);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setUser(getCurrentUserDetails());
    allCategories()
      .then((response) => {
        // console.log(response);
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    setPost({ ...post, [name]: value });
  };
  const contentChangeHandler = (data) => {
    setPost({ ...post, content: data });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Title is Required");
    }
    if (content.trim() === "") {
      alert("Content is Required");
    }
    if (categoryId.trim() === "") {
      alert("CategoryId is Required");
    }

    // console.log("post", post.postId);
    post["userId"] = user.id;
    createPost(post)
      .then((response) => {
        console.log(response);
        setPost(response);
        uploadPostImage(image, response.postId)
          .then((response) => {
            console.log(response);
            toast.success("Upload File successfully");
          })
          .catch((error) => {
            console.log(error);
          });
        toast.success("Post create successFully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Image upload in react
  const handlerChangeFile = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  // console.log("post", post);
  return (
    <div className="wrapper">
      <Card>
        {JSON.stringify(post)}
        <CardBody>
          <h1>Hulk Nahid</h1>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="title">Post Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Enter here"
                onChange={changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="content">Post Content</Label>
              <JoditEditor
                ref={editor}
                value={content}
                onChange={contentChangeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Upload Image</Label>
              <Input
                type="file"
                id="image"
                placeholder="Enter here"
                onChange={handlerChangeFile}
              />
            </FormGroup>
            <FormGroup>
              <Label for="categoryId">Post Category</Label>
              <Input
                type="select"
                name="categoryId"
                id="categoryId"
                placeholder="Enter here"
                onChange={changeHandler}
                defaultValue={0}
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

export default AddPost;
