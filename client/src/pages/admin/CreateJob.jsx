import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateResume } from "../../redux/action/resume.actions";

const CreateJob = ({ job, updateResume }) => {
  const [formData, setFormData] = useState({
    post: job ? job.post : "",
    company: job ? job.company : "",
    description: job ? job.description : "",
    start_date: job ? job.start_date : "",
    end_date: job ? job.end_date : "",
  });
  const { post, company, description, start_date, end_date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    updateResume(
      { post, company, description, start_date, end_date },
      job ? job._id : null
    );
  };
  return (
    <div className="my-5 container-fluid">
      <h1>Create Job</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Job Post</label>
          <input
            type="text"
            className="form-control"
            placeholder="What was your job post?"
            name="post"
            value={post}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group ">
          <label htmlFor="name">Company</label>
          <input
            type="text"
            className="form-control"
            placeholder="What was your company name?"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="name">Description</label>
          <textarea
            className="form-control"
            placeholder="What were you supposed to do && What were your responsiblities?"
            name="description"
            value={description}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Starting Date</label>
          <input
            type="date"
            className="form-control"
            name="start_date"
            value={start_date}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="name">Ending Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="LinkedIn Link"
            name="end_date"
            value={end_date}
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

CreateJob.propTypes = { updateResume: PropTypes.func.isRequired };
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { updateResume })(CreateJob);
