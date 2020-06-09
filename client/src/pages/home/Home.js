import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";
import background from "../../assets/images/background.png";
import { Link } from "react-router-dom";
const Home = ({ loading }) => {
  if (loading) return <Spinner />;
  return (
    <div>
      <section
        id="hero"
        className="d-flex align-items-center"
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundAttachment: "center",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "border-box",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container d-flex flex-column align-items-left"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <h1 className="text-uppercase display-4 font-weight-bold">
            <span className="">Garima</span>{" "}
            <strong
              className=" border border-dark px-1"
              style={{ color: "#b71c1c", fontWeight: "bolder" }}
            >
              Dev
            </strong>
          </h1>
          <h3>
            <span className="font-weight-light"> I'm a professional,</span>
            <br />{" "}
            <strong
              className="text-uppercase px-1"
              style={{
                color: "#FFB3C3",

                backgroundColor: "#34040D",
              }}
            >
              Content Writer | Teacher
            </strong>{" "}
            <br /> From Kathmandu, Nepal
          </h3>
          <div className="">
            <Link
              className="text-uppercase font-weight-bolder text-dark  "
              to="/resume"
            >
              More about me{" "}
              <i
                className="fa fa-arrow-circle-o-right fa-lg"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, null)(Home);
