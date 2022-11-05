import React, { useState } from "react";
import { useEffect } from "react";
import { FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { allCategories } from "../Services/user-category";
import { Link } from "react-router-dom";
const CategorySideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    allCategories()
      .then((response) => {
        // console.log(response);
        setCategories([...response]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-0 md-mt-5">
      <h3 className="mt-2">Side Bar</h3>
      <ListGroup>
        <ListGroupItem tag={Link} to={"/"} action={true} className="mt-4">
          All Blogs
        </ListGroupItem>
        {categories &&
          categories.map((myData, index) => {
            // console.log(myData);
            return (
              <ListGroupItem
                tag={Link}
                to={`/category/${myData.categoryId}`}
                key={index}
                action={true}
                className="mt-1"
              >
                {myData.categoryTitle}
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
};

export default CategorySideBar;
