import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";
import { getAllBlog, deleteBlog } from "../../redux/action/blog.actions";
import Moment from "react-moment";

const AllBlog = ({ blog: { blogs, loading }, getAllBlog, deleteBlog }) => {
  useEffect(() => {
    getAllBlog();
  }, [getAllBlog]);
  if (loading) {
    return <Spinner />;
  }
  if (!blogs) {
    getAllBlog();
  }
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Image</th>
          <th scope="col">Category</th>
          <th scope="col">Created on</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs === null ? (
          <Spinner />
        ) : (
          blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.body.substring(0, 60)}</td>
              <td>
                <img
                  src={`http://localhost:8000/images/post-images/${blog.coverImage}`}
                  alt=""
                  style={{ height: "100px", width: "100px" }}
                />
              </td>
              <td>{blog.category.title}</td>
              <td>
                <Moment format="YYYY/MM/DD HH:MM">{blog.created}</Moment>{" "}
              </td>
              <td className="btn" onClick={(e) => deleteBlog(blog._id, blogs)}>
                <i
                  className="fa fa-times-circle text-danger fa-lg"
                  aria-hidden="true"
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
AllBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  getAllBlog: PropTypes.func,
  deleteBlog: PropTypes.func,
};
const mapStateToProps = (state) => ({
  blog: state.blog,
});
export default connect(mapStateToProps, { getAllBlog, deleteBlog })(AllBlog);
