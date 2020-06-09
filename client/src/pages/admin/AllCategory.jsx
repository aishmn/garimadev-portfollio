import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCategories,
  deleteCategory,
} from "../../redux/action/category.actions";
import PropTypes from "prop-types";

const AllCategory = ({
  getCategories,
  category: { categories },
  deleteCategory,
}) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <div className="container-fluid ">
      <h3 className="lead my-3">Categories</h3>
      <table className="table table-hover bg-dark text-light">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories ? (
            categories.map((category) => (
              <tr key={category._id}>
                <td>{category.title}</td>
                <td>{category.description.substring(0, 150)}</td>
                <td>
                  <button
                    className="btn border border-outline-warning"
                    onClick={(e) => deleteCategory(category._id, categories)}
                  >
                    <i className="fa fa-times fa-lg text-danger" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Categories</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

AllCategory.propTypes = {
  category: PropTypes.object,
  getCategories: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});
export default connect(mapStateToProps, { getCategories, deleteCategory })(
  AllCategory
);
