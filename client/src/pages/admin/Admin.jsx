import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllBlog } from "../../redux/action/blog.actions";
import PropTypes from "prop-types";

const Admin = ({ getAllBlog }) => {
  useEffect(() => {
    getAllBlog();
  }, [getAllBlog]);

  return (
    <div className="container-fluid m-auto">
      <div className="jumbotron jumbotron-fluid">
        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center">
            <h1>
              Hello, Garima Welcome to the admin page, Please use your side menu
              to navigate
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
Admin.propTypes = {
  getAllBlog: PropTypes.func,
  blog: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  blog: state.blog,
});
export default connect(mapStateToProps, { getAllBlog })(Admin);
