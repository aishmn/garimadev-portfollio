import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/action/auth.actions";
import logo from "../../assets/images/gdlogo.png";
import { getInfo } from "../../redux/action/resume.actions";

const Header = ({ auth: { isAuthenticated, user }, getInfo, logout, info }) => {
  useEffect(() => {
    getInfo();
  }, [getInfo]);
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light shadow py-3 "
        style={{
          fontFamily: `"Raleway", sans-serif`,
          fontWeight: "bold",
        }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand text-danger" to="/">
            <img
              src={logo}
              height="35"
              width="35"
              className="img mr-1 "
              alt="garima dev logo"
            />
            <strong className="border border-danger p-1">Garima Dev</strong>
          </Link>
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                <i className="fa fa-home mr-1" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <i className="fa fa-book mr-1" aria-hidden="true" />
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                <i className="fa fa-file mr-1" aria-hidden="true"></i>
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="fa fa-address-book-o mr-1" aria-hidden="true"></i>
                Contact
              </Link>
            </li>
            {isAuthenticated && user && user.role === "admin" ? (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <i className="fa fa-user mr-1" aria-hidden="true" />
                  Admin
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="header-social-links">
            <a
              href={info ? info.twitter : "https://www.twitter.com/"}
              className="twitter"
              target="_blank"
            >
              <i className="icofont-twitter" />
            </a>
            <a
              href={info ? info.facebook : "https://www.facebook.com/"}
              className="facebook"
              target="_blank"
            >
              <i className="icofont-facebook" />
            </a>
            <a
              href={info ? info.instagram : "https://www.instagram.com/"}
              className="instagram"
              target="_blank"
            >
              <i className="icofont-instagram" />
            </a>
            <a
              href={info ? info.linkedin : "https://www.linkedin.com/"}
              className="linkedin"
              target="_blank"
            >
              <i className="icofont-linkedin" />
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  info: state.resume.info,
});

export default connect(mapStateToProps, { getInfo, logout })(Header);
