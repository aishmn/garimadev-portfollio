import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCategory } from "../../redux/action/category.actions";
import { withRouter } from "react-router-dom";
const CreateCategory = ({ createCategory, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createCategory(formData, history);
  };

  return (
    <div className="container my-5 ">
      <h3 className="my-3">Create a new Category</h3>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="productname">Category Title</label>
            <input
              type="text"
              className="form-control"
              id="productname"
              placeholder="Category Title"
              name="title"
              value={title}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="productdescription">Category Description</label>
          <textarea
            className="form-control"
            id="productdescription"
            placeholder="Category Description"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-success form-control rounded-0"
          value="Add Category"
        />
      </form>
    </div>
  );
};
CreateCategory.propTypes = {
  createCategory: PropTypes.func.isRequired,
};

export default connect(null, { createCategory })(withRouter(CreateCategory));
