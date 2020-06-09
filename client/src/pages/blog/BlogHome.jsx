import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAllBlog,
  filterBlogByCategory,
} from "../../redux/action/blog.actions";
import Post from "../../components/blog/Post";
import { getCategories } from "../../redux/action/category.actions";
import Spinner from "../../components/layout/Spinner";

const BlogHome = ({
  getAllBlog,
  blog: { blogs, loading, filteredBlogs },
  getCategories,
  category: { categories },
  filterBlogByCategory,
}) => {
  useEffect(() => {
    getAllBlog();
    getCategories();
  }, [getAllBlog, getCategories]);

  if (filteredBlogs === null) {
    filteredBlogs = blogs;
  }
  if (blogs === null) return <Spinner />;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 my-4">
          {filteredBlogs
            ? filteredBlogs.map((post) => <Post key={post._id} post={post} />)
            : ""}

          <ul className="pagination justify-content-center mb-4">
            <li className="page-item">
              <a className="page-link" href="/#">
                ← Older
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="/#">
                Newer →
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card my-4">
            <h5 className="card-header">Search</h5>
            <div className="card-body">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">
                    Go!
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="card my-4">
            <h5 className="card-header">Categories</h5>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <div className="row">
                  <div className="col-lg-6">
                    <li
                      className="btn btn-outline-secondary m-1"
                      onClick={(e) => filterBlogByCategory(null, blogs)}
                    >
                      All Blogs
                    </li>
                  </div>

                  {categories
                    ? categories.map((category) => (
                        <div className="col-lg-6" key={category._id}>
                          <li
                            className="btn btn-outline-secondary m-1"
                            onClick={(e) =>
                              filterBlogByCategory(category._id, blogs)
                            }
                          >
                            {category.title}
                          </li>
                        </div>
                      ))
                    : ""}
                </div>
              </ul>
            </div>
          </div>
          <div className="card my-4">
            <h5 className="card-header">Coming Soon</h5>
            <div className="card-body">
              More Features will be uploaded sooner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
BlogHome.propTypes = {
  blog: PropTypes.object.isRequired,
  getAllBlog: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  filterBlogByCategory: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  blog: state.blog,
  category: state.category,
});
export default connect(mapStateToProps, {
  getAllBlog,
  getCategories,
  filterBlogByCategory,
})(BlogHome);
