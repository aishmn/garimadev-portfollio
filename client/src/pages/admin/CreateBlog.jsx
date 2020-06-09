import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../redux/action/category.actions";
import { createNewBlog } from "../../redux/action/blog.actions";
import { withRouter } from "react-router-dom";
const CreateBlog = ({
  getCategories,
  category: { categories },
  createNewBlog,
  auth,
  history,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: auth.user._id,
    category: "",
  });
  const [file, setFile] = useState();
  const { title, body, author, category } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getCategories();
  }, [category, getCategories]);
  const onCoverImageChange = (e) => setFile(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("coverImage", file);
    data.append("author", author);
    data.append("body", body);
    data.append("category", category);

    createNewBlog(data, history);
  };

  return (
    <div className="container my-5 ">
      <h3 className=" mb-4">Create a new Blog Post</h3>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="productname">Blog Title</label>
            <input
              type="text"
              className="form-control"
              id="productname"
              placeholder="Blog title"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="productdescription">Blog Description</label>
          <textarea
            className="form-control"
            id="productdescription"
            placeholder="Blog description"
            name="body"
            value={body}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label htmlFor="coverimage">Cover Image</label>
            <input
              type="file"
              className="form-control "
              id="coverimage"
              name="coverImage"
              onChange={onCoverImageChange}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="form-control"
              name="category"
              required
              value={category}
              onChange={onChange}
            >
              <option value="">Choose one</option>
              {categories ? (
                categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))
              ) : (
                <option>No any Category</option>
              )}
            </select>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-success form-control rounded-0"
          value="Add Blog"
        />
      </form>
    </div>
  );
};
CreateBlog.propTypes = {
  getCategories: PropTypes.func.isRequired,
  createNewBLog: PropTypes.func,
  category: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.category,
  auth: state.auth,
});
export default connect(mapStateToProps, { getCategories, createNewBlog })(
  withRouter(CreateBlog)
);
