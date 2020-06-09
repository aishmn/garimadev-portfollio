import React from "react";
import { connect } from "react-redux";
import Iframe from "react-iframe";
const Contact = ({ info }) => {
  return (
    <section className="container-fluid">
      <div className="">
        <div className="text-center py-5" data-aos="fade-up">
          <p className="h4 py-2">
            Thank you for making upto here, thank you so much, are you
            instrested
            <br /> exploring about me more,
            <br /> you can move to resume section and about section.
            <br />
            <h1
              className="h1 text-uppercase font-weight-bold pt-3 text-danger "
              style={{ fontFamily: `"Raleway", sans-serif` }}
            >
              Are you trying to contact me ?
            </h1>
          </p>
        </div>
        <div>
          <Iframe
            width="100%"
            height="550"
            frameBorder="0"
            allowFullScreen
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.0667112899566!2d85.34787345405633!3d27.71316649928819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197b94a27413%3A0x1ae9e47c2d8673b1!2sGaurighat%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1591689386460!5m2!1sen!2snp"
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row  mt-lg-3 ">
          <div
            className="col-lg-4 bg-secondary "
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
          >
            <div className="info bg-secondary m-2 ">
              <div className="row pt-2  ">
                <div className="col-3 d-flex align-items-center justify-content-center  ">
                  <i className="fa fa-map-marker fa-3x text-warning" />
                </div>
                <div className="col-9 pt-2">
                  <h4 className="text-light pt-4">Location:</h4>
                  <p className="text-light pb-3">Gaurighat, Kathmandu Nepal</p>
                </div>
              </div>
              <div className="row mt-1 pt-3 border-top">
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <i className="fa fa-envelope fa-3x text-warning" />
                </div>
                <div className="col-9 pt-2">
                  <h4 className="text-light">Email:</h4>
                  <p className="text-light">
                    <a
                      className="text-light "
                      href="mailto:garimadev07@gmail.com"
                    >
                      garimadev07@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-1 mt-lg-0">
            <div className="row ">
              <div
                className="col-md-6 text-center py-5 bg-warning  border-bottom  "
                data-aos="zoom-in"
              >
                <a
                  href={info ? info.facebook : "https://www.facebook.com/"}
                  className="facebook"
                >
                  <i className="fa fa-facebook fa-3x" />
                </a>{" "}
              </div>
              <div
                className="col-md-6 text-center py-5 bg-warning border-right border-left border-bottom"
                data-aos="zoom-in"
              >
                <a
                  href={info ? info.instagram : "https://www.instagram.com/"}
                  className="instagram"
                >
                  <i className="fa fa-instagram fa-3x" />
                </a>
              </div>
              <div
                className="col-md-6 text-center py-5 bg-warning  border-right border-top "
                data-aos="zoom-in"
              >
                <a
                  href={info ? info.linkedin : "https://www.linkedin.com/"}
                  className="linkedin"
                >
                  <i className="fa fa-linkedin fa-3x" />
                </a>
              </div>
              <div
                className="col-md-6 text-center py-5 bg-warning border-top border-left"
                data-aos="zoom-in"
              >
                <a
                  href={info ? info.twitter : "https://www.twitter.com/"}
                  className="twitter "
                >
                  <i className="fa fa-twitter fa-3x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  info: state.resume.info,
});
export default connect(mapStateToProps, null)(Contact);
