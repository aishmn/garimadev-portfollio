import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createInfo, getInfo } from "../../redux/action/resume.actions";

const initalState = {
  facebook: "",
  twitter: "",
  linkedin: "",
  instagram: "",
};

const EditInfo = ({ resume: { info, loading }, createInfo, getInfo }) => {
  const [formData, setFormData] = useState(initalState);

  useEffect(() => {
    if (!info) getInfo();
    if (info && info !== null)
      setFormData({
        facebook: info.facebook,
        twitter: info.twitter,
        linkedin: info.linkedin,
        instagram: info.instagram,
      });
  }, [getInfo, info]);

  const { facebook, twitter, linkedin, instagram } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createInfo(
      { facebook, twitter, linkedin, instagram },
      info !== null ? info._id : null
    );
  };

  return (
    <div className="my-5">
      <h1>Edit Info</h1>
      <form onSubmit={onSubmit}>
        <label className="lead">Social Links</label>
        <div className="form-group d-flex align-items-center">
          <i className="fa fa-facebook fa-2x mr-2 text-primary px-1" />
          <input
            type="text"
            className="form-control"
            placeholder="Facebook Link"
            name="facebook"
            value={facebook}
            onChange={onChange}
          />
        </div>
        <div className="form-group d-flex align-items-center">
          <i className="fa fa-instagram fa-2x mr-2 text-danger" />
          <input
            type="text"
            className="form-control"
            placeholder="Instagram Link"
            name="instagram"
            value={instagram}
            onChange={onChange}
          />
        </div>
        <div className="form-group d-flex align-items-center">
          <i className="fa fa-twitter fa-2x mr-2 text-danger" />
          <input
            type="text"
            className="form-control"
            placeholder="Twitter Link"
            name="twitter"
            value={twitter}
            onChange={onChange}
          />
        </div>
        <div className="form-group d-flex align-items-center">
          <i className="fa fa-linkedin fa-2x mr-2 text-danger" />
          <input
            type="text"
            className="form-control"
            placeholder="LinkedIn Link"
            name="linkedin"
            value={linkedin}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-dark form-control"
          value="Update or Save"
        />
      </form>
    </div>
  );
};
EditInfo.propTypes = {
  auth: PropTypes.object.isRequired,
  createInfo: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  resume: state.resume,
});
export default connect(mapStateToProps, { createInfo, getInfo })(EditInfo);
