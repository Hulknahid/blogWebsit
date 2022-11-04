import React, { useState } from "react";
import { FormGroup, ListGroup, ListGroupItem } from "reactstrap";

const CategorySideBar = () => {
  const [categories, setCategories] = useState([]);
  return (
    <div className="mt-0 md-mt-5">
      <h3 className="mt-2">Side Bar</h3>
      <ListGroup>
        <ListGroupItem action={true} className="mt-4">
          All Blogs
        </ListGroupItem>
        <ListGroupItem action={true} className="mt-1">
          Dipressin
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default CategorySideBar;
