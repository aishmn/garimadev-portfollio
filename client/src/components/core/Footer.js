import React from "react";
import "./footer.scss";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Information</h2>
            <p className="pr-5 text-white-50">
              Hello, thanks for visting and taking a time to know me a little
              bit more, you can read blogs and other articles written by me, be
              updated, stay smilling - <br />
              Garima Dev
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li className="p-1">
                <a href="/#" className="twitter">
                  <i className="icofont-twitter mr-1" />
                  Twitter
                </a>
              </li>
              <li className="p-1">
                <a href="/#" className="facebook">
                  <i className="icofont-facebook mr-1" />
                  Facebook
                </a>
              </li>
              <li className="p-1">
                <a href="/#" className="instagram">
                  <i className="icofont-instagram mr-1" />
                  Instagram
                </a>
              </li>
              <li className="p-1">
                <a href="/#" className="linkedin">
                  <i className="icofont-linkedin mr-1" />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>Gaurighat, Kathmandu Nepal</p>

            <a href="mailto:garimadev07@gmail.com" className="text-warning">
              <br />
              <i className="fa fa-envelope-o mr-3" />
              garimadev07@gmail.com
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p>
              <small className="text-white-50">
                © {currentYear}. All Rights Reserved. Garima Dev
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
