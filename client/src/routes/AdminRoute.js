import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/layout/Spinner";
import AdminSidebar from "../components/admin/AdminSidebar";
import { setAlert } from "../redux/action/alert.actions";

const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  setAlert,
  ...rest
}) => {
  if (user && user.role !== "admin") {
    setAlert("Sorry you are not authorized, Please try with another user!");
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Fragment>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <AdminSidebar />
                </div>
                <div className="col-md-8 container-fluid">
                  <Component {...props} />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }
    />
  );
};

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert })(AdminRoute);
